import React from 'react';
import { Banner } from '../components/home/Banner';
import { PostList } from '../components/board/PostList';
import { BottomBanner } from '../components/home/BottomBanner';
import { useQuery, gql } from '@apollo/client';

const GET_RECENT_POSTS = gql`
  query GetRecentPosts {
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
      reactions {
        id
        type
        userId
      }
    }
  }
`;

export const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_RECENT_POSTS);

  return (
    <div className="min-h-screen">
      <Banner />
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">Error loading posts: {error.message}</p>
          </div>
        ) : (
          <PostList
            posts={data?.posts?.map((post: any) => ({
              id: post.id,
              title: post.title,
              content: post.content,
              thumbnailUrl: post.thumbnailUrl,
              createdAt: post.createdAt,
              author: {
                id: post.author?.id || '0',
                name: post.author?.name || 'Anonymous'
              },
              comments: post.comments?.map((comment: any) => ({
                id: comment.id,
                content: comment.content,
                author: {
                  id: comment.author?.id || '0',
                  name: comment.author?.name || 'Anonymous'
                },
                reactions: comment.reactions || []
              })) || [],
              reactions: post.reactions || []
            })) || []}
          />
        )}
      </div>
      <BottomBanner />
    </div>
  );
};
