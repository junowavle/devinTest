import React from 'react';
import { shadows } from '../../styles/colors';

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
  };
}

interface PostCardProps {
  post: Post;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onEdit,
  onDelete,
}) => {
  const { title, content, author } = post;

  return (
    <div
      className="bg-white rounded-lg overflow-hidden"
      style={{ boxShadow: shadows.medium }}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">By {author.name}</p>
        <p className="text-gray-800 line-clamp-3">{content}</p>
        {(onEdit || onDelete) && (
          <div className="mt-4 flex gap-2">
            {onEdit && (
              <button
                onClick={onEdit}
                className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
