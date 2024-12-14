import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RECENT_POSTS } from '../../graphql/queries';
import { PostCard, Post } from '../board/PostCard';

const RecentPosts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_RECENT_POSTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="recent-posts">
      <h2>Recent Posts</h2>
      <div className="posts-grid">
        {data.posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
