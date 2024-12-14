import { gql } from '@apollo/client';

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
      reactions {
        id
        reactionType
        user {
          id
          name
        }
      }
    }
  }
`;
