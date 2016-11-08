import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'angular2-apollo';

import { AppComponent } from './app.component';
import { client } from './apollo';
// Pages
import { FeedComponent } from './feed/feed.component';
import { PostPageComponent } from './post-page/post-page.component';
import { routes } from './app.router';
// Comments
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsContainerComponent } from './comments/comments-container.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
// Posts
import { PostComponent } from './post/post.component';
import { PostContainerComponent } from './post/post-container.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ApolloModule.withClient(client)
  ],
  declarations: [
    AppComponent,
    // Pages
    FeedComponent,
    PostPageComponent,
    // Comments
    CommentComponent,
    CommentsComponent,
    CommentsContainerComponent,
    NewCommentComponent,
    // Posts
    PostComponent,
    PostContainerComponent,
    PostDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
