import { gql } from '@apollo/client';

export const TEST_CONNECTION = gql`
  query TestConnection {
    __typename
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      thumbnailUrl
      createdAt
      author {
        id
        name
      }
      reactions {
        id
        type
        userId
      }
      comments {
        id
        content
        author {
          id
          name
        }
        reactions {
          id
          type
          userId
        }
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $thumbnailUrl: String, $authorId: ID!) {
    createPost(
      title: $title
      content: $content
      thumbnailUrl: $thumbnailUrl
      authorId: $authorId
    ) {
      id
      title
      content
      thumbnailUrl
      author {
        id
        name
      }
      reactions {
        id
        type
        userId
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $content: String!, $thumbnailUrl: String) {
    updatePost(
      id: $id
      title: $title
      content: $content
      thumbnailUrl: $thumbnailUrl
    ) {
      id
      title
      content
      thumbnailUrl
      author {
        id
        name
      }
      reactions {
        id
        type
        userId
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: ID!, $content: String!, $authorId: ID!) {
    createComment(postId: $postId, content: $content, authorId: $authorId) {
      id
      content
      author {
        id
        name
      }
      reactions {
        id
        type
        userId
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`;

export const UPDATE_COMMENT = gql`
  mutation UpdateComment($id: ID!, $content: String!) {
    updateComment(id: $id, content: $content) {
      id
      content
      author {
        id
        name
      }
      reactions {
        id
        type
        userId
      }
    }
  }
`;
