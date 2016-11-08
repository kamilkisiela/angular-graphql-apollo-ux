import { Routes } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { PostPageComponent } from './post-page/post-page.component';

export const routes: Routes  = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'post/:id', component: PostPageComponent }
];
