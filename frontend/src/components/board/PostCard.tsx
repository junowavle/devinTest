import React from 'react';
import { colors, shadows } from '../../styles/colors';

interface PostCardProps {
  title: string;
  thumbnail?: string;
  author: string;
  content: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  thumbnail,
  author,
  content,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden"
      style={{ boxShadow: shadows.medium }}
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">By {author}</p>
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
