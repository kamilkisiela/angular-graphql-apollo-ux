import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { getFeedQuery } from './feed.models';

@Component({
  selector: 'feed',
  template: `
    <div class="list-group">
      <post-container *ngFor="let post of posts | async | select: 'allPosts'" [postId]="post.id"></post-container>
    </div>
  `
})
export class FeedComponent implements OnInit {
  posts: any;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.posts = this.apollo.watchQuery({ query: getFeedQuery });
  }
}
