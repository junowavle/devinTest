import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3001/graphql',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Apollo-Require-Preflight': 'true',
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
