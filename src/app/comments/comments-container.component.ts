import { Component, OnInit, Input } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { getCommentsQuery } from './comments.models';
import { fragments } from '../comment/comment.models';

@Component({
  selector: 'comments-container',
  template: `
    <comments [comments]="comments | async | select: 'allComments'"></comments>
  `
})
export class CommentsContainerComponent implements OnInit {
  // we won't use it
  // let's fetch all the comments from all posts
  @Input() postId: string;
  comments: any;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.comments = this.apollo.watchQuery({
      query: getCommentsQuery,
      fragments: fragments['comment'].fragments() 
    });
  }
}
