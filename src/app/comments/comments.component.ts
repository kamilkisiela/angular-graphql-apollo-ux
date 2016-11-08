import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments',
  template: `
    <ul class="list-group" *ngIf="comments">
      <li class="list-group-item" *ngFor="let comment of comments">
        <comment [comment]="comment"></comment>
      </li>
    </ul>
  `
})
export class CommentsComponent {
  @Input() comments: any[];
}
