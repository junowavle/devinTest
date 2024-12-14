import React from 'react';
import { colors } from '../../styles/colors';

interface ReactionButtonProps {
  type: 'like' | 'dislike';
  count: number;
  active?: boolean;
  onClick?: () => void;
}

export const ReactionButton: React.FC<ReactionButtonProps> = ({
  type,
  count,
  active = false,
  onClick,
}) => {
  const icon = type === 'like' ? '👍' : '👎';

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-200 ${
        active
          ? 'bg-orange-100 text-orange-600'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span>{icon}</span>
      <span className="font-medium">{count}</span>
    </button>
  );
};
