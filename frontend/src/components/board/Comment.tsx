import React from 'react';
import { Button } from '../shared/Button';
import { colors, shadows } from '../../styles/colors';

interface CommentProps {
  author: string;
  content: string;
  likes: number;
  dislikes: number;
  onLike?: () => void;
  onDislike?: () => void;
  onDelete?: () => void;
}

export const Comment: React.FC<CommentProps> = ({
  author,
  content,
  likes,
  dislikes,
  onLike,
  onDislike,
  onDelete,
}) => {
  return (
    <div
      className="p-4 mb-4 rounded-lg bg-white"
      style={{ boxShadow: shadows.small }}
    >
      <div className="flex justify-between items-start mb-2">
        <p className="font-medium text-gray-800">{author}</p>
        {onDelete && (
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-700"
          >
            Delete
          </button>
        )}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex gap-4">
        <button
          onClick={onLike}
          className="flex items-center gap-1 text-gray-600 hover:text-orange-600"
        >
          <span>👍</span>
          <span>{likes}</span>
        </button>
        <button
          onClick={onDislike}
          className="flex items-center gap-1 text-gray-600 hover:text-orange-600"
        >
          <span>👎</span>
          <span>{dislikes}</span>
        </button>
      </div>
    </div>
  );
};
