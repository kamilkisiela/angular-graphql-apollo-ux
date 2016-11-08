import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  template: `
    <a *ngIf="post" [routerLink]="['/post', post.id]" (mouseover)="mouseOver()" class="list-group-item" style="margin-bottom: 15px;">
      <h4 class="list-group-item-heading">
        {{post.title}}
      </h4>
      <p class="list-group-item-text">
        {{post.short}}
      </p>
    </a>
  `
})
export class PostComponent {
  @Input() post: any;
  @Output() onMouseOver: EventEmitter<void> = new EventEmitter<void>();

  mouseOver() {
    this.onMouseOver.emit();
  }
}
