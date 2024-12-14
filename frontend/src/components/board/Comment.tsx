import React from 'react';
import { shadows } from '../../styles/colors';
import { Comment as CommentType } from '../../types';
import { ReactionButton } from './ReactionButton';

interface CommentProps extends Omit<CommentType, 'reactions'> {
  onDelete?: () => void;
  reactions?: CommentType['reactions'];
}

export const Comment: React.FC<CommentProps> = ({
  id,
  author,
  content,
  reactions = [],
  createdAt,
  onDelete,
}) => {
  const getLikeCount = () => {
    return reactions?.filter(reaction => reaction.type === 'LIKE').length || 0;
  };

  const getDislikeCount = () => {
    return reactions?.filter(reaction => reaction.type === 'DISLIKE').length || 0;
  };

  return (
    <div
      className="p-4 mb-4 rounded-lg bg-white"
      style={{ boxShadow: shadows.small }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium text-gray-800">{author?.name || 'Anonymous'}</p>
          <p className="text-sm text-gray-500">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
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
        <ReactionButton
          count={getLikeCount()}
          type="LIKE"
          postId={id}
        />
        <ReactionButton
          count={getDislikeCount()}
          type="DISLIKE"
          postId={id}
        />
      </div>
    </div>
  );
};
