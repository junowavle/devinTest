import React from 'react';
import { PostCard } from './PostCard';

interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  author: string;
}

interface PostListProps {
  posts: Post[];
  onEditPost?: (id: number) => void;
  onDeletePost?: (id: number) => void;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  onEditPost,
  onDeletePost,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          thumbnail={post.thumbnail}
          author={post.author}
          onEdit={onEditPost ? () => onEditPost(post.id) : undefined}
          onDelete={onDeletePost ? () => onDeletePost(post.id) : undefined}
        />
      ))}
    </div>
  );
};
