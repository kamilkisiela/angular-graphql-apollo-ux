import { Component, OnInit, Input } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { getPostQuery, fragments as postFragments } from './post.models';
// for prefetching
import { getCommentsQuery } from '../comments/comments.models';
import { fragments as commentFragments } from '../comment/comment.models';
import { getPostDetailsQuery } from '../post-page/post-page.models';

@Component({
  selector: 'post-container',
  template: `
    <post
      [post]="post | async | select: 'Post'"
      (onMouseOver)="prefetch()">
    </post>
  `
})
export class PostContainerComponent implements OnInit {
  @Input() postId: string;
  post: any;
  prefetched: boolean = false;
  
  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.post = this.apollo.watchQuery({
      query: getPostQuery,
      fragments: postFragments['post'].fragments(),
      variables: {
        id: this.postId
      }
    });
  }

  prefetch() {
    if (!this.prefetched) {
      return;
    }

    // prefetch comments
    this.apollo.query({
      query: getCommentsQuery,
      fragments: commentFragments['comment'].fragments(),
    });

    // prefetch post details
    this.apollo.query({
      query: getPostDetailsQuery,
      fragments: postFragments['post'].fragments(),
      variables: { id: this.postId }
    });
  }
}
