import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Apollo-Require-Preflight': 'true',
    'Authorization': 'Basic ' + btoa(`user:${import.meta.env.VITE_AUTH_TOKEN}`),
    'Accept': 'application/json'
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only'
    },
    query: {
      fetchPolicy: 'network-only'
    }
  }
});
