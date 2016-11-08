import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import gql from 'graphql-tag';

import { fragments } from '../comment/comment.models';

@Component({
  selector: 'new-comment',
  template: `
    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" (click)="submit()">Submit</button>
      </span>
      <input type="text" class="form-control" name="comment" [(ngModel)]="comment" placeholder="New comment...">
    </div>
  `
})
export class NewCommentComponent {
  comment: string;
  
  constructor(
    private apollo: Angular2Apollo
  ) { }

  submit() {
    if (!this.comment) {
      return;
    }

    const comment = this.comment;
    this.comment = null; 

    this.apollo.mutate({
      mutation: gql`
        mutation submitComment ($comment: String!) {
          createComment(text: $comment) {
            ...CommentData
          }
        }
      `,
      fragments: fragments['comment'].fragments(),
      variables: {
        comment
      },

      // STEP 1: Update query without refetching
      updateQueries: { getComments: pushComment },

      // STEP 2: Use Optimistic response 
      optimisticResponse: optimisticComment(comment)
    });
  }
}


// helpers


function optimisticComment(text: string) {
  return {
    __typename: 'Mutation',
    createComment: {
      __typename: 'Comment',
      id: null,
      text
    }
  };
}

function pushComment(prev, {mutationResult}) {
  const newComment = mutationResult.data.createComment;

  if (isDuplicateComment(newComment, prev.allComments)) {
      return prev;
  }

  const allComments = [...prev.allComments, newComment];

  return Object.assign({}, prev, { allComments });
}

function isDuplicateComment(newComment: any, existingComments: any[]): boolean {
  return newComment.id !== null && existingComments.some(comment => newComment.id === comment.id);
}
