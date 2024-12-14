import { gql } from '@apollo/client';

export const GET_RECENT_POSTS = gql`
  query GetRecentPosts {
    posts {
      id
      title
      content
      createdAt
      author {
        id
        name
      }
    }
  }
`;
