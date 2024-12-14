import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } from '../graphql/queries';
import { PostList } from '../components/board/PostList';

interface PostFormData {
  title: string;
  content: string;
  thumbnailUrl?: string;
}

export const BoardPage: React.FC = () => {
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    thumbnailUrl: '',
  });

  const { loading, error, data } = useQuery(GET_POSTS);
  const [createPost] = useMutation(CREATE_POST);
  const [deletePost] = useMutation(DELETE_POST);
  const [updatePost] = useMutation(UPDATE_POST);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({
        variables: {
          ...formData,
          authorId: '123e4567-e89b-12d3-a456-426614174000', // Test UUID for development
        },
        refetchQueries: [{ query: GET_POSTS }],
      });
      setFormData({ title: '', content: '', thumbnailUrl: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bulletin Board</h1>

      {/* Create Post Form */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleCreatePost}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail URL
            </label>
            <input
              type="text"
              value={formData.thumbnailUrl}
              onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-2 border rounded resize-none"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Create Post
          </button>
        </form>
      </div>

      {/* Posts List */}
      <PostList
        posts={data?.posts?.map((post: any) => ({
          id: post.id.toString(),
          title: post.title,
          content: post.content,
          thumbnailUrl: post.thumbnailUrl,
          author: {
            id: post.author?.id.toString() || '123e4567-e89b-12d3-a456-426614174000',
            name: post.author?.name || 'Anonymous'
          },
          comments: post.comments?.map((comment: any) => ({
            id: comment.id.toString(),
            content: comment.content,
            author: {
              id: comment.author?.id.toString() || '123e4567-e89b-12d3-a456-426614174000',
              name: comment.author?.name || 'Anonymous'
            }
          })) || [],
          createdAt: post.createdAt || new Date().toISOString()
        })) || []}
        onDelete={async (id: string) => {
          try {
            await deletePost({
              variables: { id },
              refetchQueries: [{ query: GET_POSTS }],
            });
          } catch (error) {
            console.error('Error deleting post:', error);
          }
        }}
        onEdit={async (id: string, data: PostFormData) => {
          try {
            await updatePost({
              variables: { id, ...data },
              refetchQueries: [{ query: GET_POSTS }],
            });
          } catch (error) {
            console.error('Error updating post:', error);
          }
        }}
        currentUserId="123e4567-e89b-12d3-a456-426614174000" // Test UUID for development
      />
    </div>
  );
};
