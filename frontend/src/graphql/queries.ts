import { gql } from '@apollo/client';

export const TEST_CONNECTION = gql`
  query TestConnection {
    __typename
  }
`;

export const GET_RECENT_POSTS = gql`
  query GetRecentPosts {
    posts {
      id
      title
      content
      thumbnailUrl
      createdAt
      updatedAt
      author {
        id
        name
      }
    }
  }
`;
