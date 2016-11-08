import gql from 'graphql-tag';
import Fragment from 'graphql-fragments'; 

const fragments: {
  [key: string]: Fragment
} = {
  comment: new Fragment(gql`
    fragment CommentData on Comment {
      id
      text
    }
  `)
};

export {
  fragments
}
