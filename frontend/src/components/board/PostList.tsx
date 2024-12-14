import React from 'react';
import { PostCard } from './PostCard';
import { Post } from '@/types';

interface PostFormData {
  title: string;
  content: string;
  thumbnailUrl?: string;
}

interface PostListProps {
  posts: Post[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string, data: PostFormData) => void;
  onLike?: (postId: string) => void;
  onDislike?: (postId: string) => void;
  onAddComment?: (postId: string, content: string) => void;
  currentUserId?: string;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  onDelete,
  onEdit,
  onLike,
  onDislike,
  onAddComment,
  currentUserId,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onEdit={onEdit ? (data: PostFormData) => onEdit(post.id, data) : undefined}
          onDelete={onDelete ? () => onDelete(post.id) : undefined}
          onLike={onLike ? () => onLike(post.id) : undefined}
          onDislike={onDislike ? () => onDislike(post.id) : undefined}
          onAddComment={onAddComment ? (content: string) => onAddComment(post.id, content) : undefined}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
};
