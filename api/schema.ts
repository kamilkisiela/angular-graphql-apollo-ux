import { makeExecutableSchema } from 'graphql-tools';

const rootSchema = [`
  
  type Comment {
    id: Int!
    text: String!
  }
  
  type Post {
    id: Int!
    title: String!
    short: String!
  }

  type Query {
    allPosts: [Post]
    allComments: [Comment]
  }

  type Mutation {
    createComment(text: String!): Comment
  }

  schema {
    query: Query
    mutation: Mutation
  }

`];

const rootResolvers = {
  Query: {
    allPosts: (root, args, context) => context.db.allPosts(),
    allComments: (root, args, context) => context.db.allComments()
  },
  Mutation: {
    createComment: (root, args, context) => context.db.createComment(args.text)
  }
}

const schema = makeExecutableSchema({
  typeDefs: rootSchema,
  resolvers: rootResolvers
});

export default schema;
