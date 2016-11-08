import gql from 'graphql-tag';

const getPostDetailsQuery = gql`
  query getPostDetails ($id: ID!) {
    Post(id: $id) {
      ...PostData
    }
  }
`;

export {
  getPostDetailsQuery
} 
