import React, { useState } from 'react';
import { PostList } from '../components/board/PostList';
import { Button } from '../components/shared/Button';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      thumbnailUrl
      author {
        id
        name
      }
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $thumbnailUrl: String, $authorId: Int!) {
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
        name
      }
    }
  }
`;

export const BoardPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [createPost] = useMutation(CREATE_POST);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePost = async (formData: any) => {
    try {
      await createPost({
        variables: {
          ...formData,
          authorId: 1, // TODO: Replace with actual user ID
        },
        refetchQueries: [{ query: GET_POSTS }],
      });
      setIsCreating(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Bulletin Board</h1>
        <Button onClick={() => setIsCreating(true)}>Create Post</Button>
      </div>

      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error loading posts</p>
      ) : (
        <PostList
          posts={data?.posts.map((post: any) => ({
            ...post,
            author: post.author.name,
          }))}
        />
      )}

      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleCreatePost({
                title: formData.get('title'),
                content: formData.get('content'),
                thumbnailUrl: formData.get('thumbnailUrl'),
              });
            }}>
              <input
                type="text"
                name="title"
                placeholder="Post Title"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="text"
                name="thumbnailUrl"
                placeholder="Thumbnail URL"
                className="w-full p-2 border rounded mb-4"
              />
              <textarea
                name="content"
                placeholder="Post Content"
                className="w-full p-2 border rounded mb-4 h-32"
                required
              />
              <div className="flex justify-end gap-2">
                <Button onClick={() => setIsCreating(false)} type="button">Cancel</Button>
                <Button type="submit">Create</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
