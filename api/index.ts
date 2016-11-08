import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './schema';
import DB from './db';

const app = express();
const PORT = 9090;

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({
  schema,
  context: {
    db: new DB()
  }
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT, () => console.log(
  `API Server is now running on http://localhost:${PORT}`
));