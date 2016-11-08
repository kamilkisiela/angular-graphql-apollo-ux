import gql from 'graphql-tag';
import Fragment from 'graphql-fragments';

const fragments: {
  [key: string]: Fragment
} = {
  post: new Fragment(gql`
    fragment PostData on Post {
      id
      title
      short
    }
  `)
}

const getPostQuery = gql`
  query getPost($id: ID!) {
    Post(id: $id) {
      ...PostData
    }
  }
`;

export {
  getPostQuery,
  fragments
} 
