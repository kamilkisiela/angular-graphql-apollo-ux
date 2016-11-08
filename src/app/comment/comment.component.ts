import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment',
  template: `
    <span *ngIf="comment">
      {{comment.text}}
    </span>
  `
})
export class CommentComponent {
  @Input() comment: any;
}
