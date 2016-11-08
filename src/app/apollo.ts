import { ApolloClient, createNetworkInterface, createBatchingNetworkInterface } from 'apollo-client';

const networkInterface = {
  /**
   * Use GraphCool endpoint
   */
  simple: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/civ6rrias3crl018278sbv2v5'
  }),
  /**
   * STEP 4
   * 
   * Use endpoint with transport batching
   */
  batching: createBatchingNetworkInterface({
    uri: 'http://localhost:9090/graphql',
    batchInterval: 10
  })
};

const client = new ApolloClient({
  networkInterface: networkInterface.batching
});

export {
  client
}
