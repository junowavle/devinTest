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
      author {
        name
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
      </div>
      <BottomBanner />
    </div>
  );
};
