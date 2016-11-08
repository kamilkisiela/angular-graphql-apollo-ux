import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/feed">Blog</a>
        </div>
      </div>
    </nav>
    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
