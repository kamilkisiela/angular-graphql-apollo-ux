import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

import { getPostDetailsQuery } from './post-page.models';
import { fragments } from '../post/post.models';

@Component({
  selector: 'post-page',
  template: `
    <div *ngIf="loading">loading ...</div>
    <post-details *ngIf="!loading" [post]="post"></post-details>
  `
})
export class PostPageComponent implements OnInit, OnDestroy {
  post: any;
  loading: boolean = true;
  postSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.loading = true;

      if (this.postSub) {
        this.postSub.unsubscribe();
        this.postSub = undefined;
      }

      this.postSub = this.apollo.watchQuery({
        query: getPostDetailsQuery,
        fragments: fragments['post'].fragments(),
        variables: { id }
      }).subscribe(({data, loading}) => {
        this.post = data.Post;
        this.loading = loading;
      });
    });
  }

  ngOnDestroy() {
    if (this.postSub) {
      this.postSub.unsubscribe();
      this.postSub = undefined;
    }
  }
}
