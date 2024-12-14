import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../graphql/queries';
import { Post } from '../../types';
import { PostCard } from '../board/PostCard';

const RecentPosts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (error) {
      console.error('GraphQL Error:', {
        message: error.message,
        networkError: error.networkError,
        graphQLErrors: error.graphQLErrors,
        extraInfo: error.extraInfo,
        stack: error.stack,
      });
    }
  }, [error]);

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div>
      <div>Error: {error.message}</div>
      {error.networkError && <div>Network Error: {error.networkError.message}</div>}
      {error.graphQLErrors?.map((err, i) => (
        <div key={i}>GraphQL Error: {err.message}</div>
      ))}
    </div>
  );

  return (
    <div className="recent-posts">
      <h2>Recent Posts</h2>
      <div className="posts-grid">
        {data?.posts?.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
