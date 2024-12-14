import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3001/graphql',
  headers: {
    'Content-Type': 'application/json',
    'Apollo-Require-Preflight': 'true',
    'Authorization': 'Basic ' + btoa('user:ac616014d3a040a661724e773467ec9f')
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
