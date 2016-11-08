import gql from 'graphql-tag';

const getCommentsQuery = gql`
  query getComments {
    allComments {
      ...CommentData
    }
  }
`;

export {
  getCommentsQuery
} 
