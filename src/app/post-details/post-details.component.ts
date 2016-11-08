import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-details',
  template: `
    <h1>
      {{post.title}}
    </h1>
    <p>
      {{post.short}}
    </p>

    <h3>
      Comments
    </h3>

    <new-comment></new-comment>

    <comments-container [postId]="post.id"></comments-container>
  `
})
export class PostDetailsComponent {
  @Input() post: any;
}
