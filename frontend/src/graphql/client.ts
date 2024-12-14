import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://hi-chat-app-tunnel-njjayuhq.devinapps.com/graphql',
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
