import gql from 'graphql-tag';

const getFeedQuery = gql`
  query getFeed {
    allPosts {
      id
    }
  }
`;

export {
  getFeedQuery
} 
