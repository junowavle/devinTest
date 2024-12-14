import React from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

const CREATE_REACTION = gql`
  mutation CreateReaction($type: String!, $postId: ID!, $userId: ID!) {
    createReaction(type: $type, postId: $postId, userId: $userId) {
      id
      type
      userId
      postId
    }
  }
`;

interface ReactionButtonProps {
  type: 'LIKE' | 'DISLIKE';
  count: number;
  postId: string;  // Changed from number to string for UUID compatibility
}

export const ReactionButton: React.FC<ReactionButtonProps> = ({
  type,
  count,
  postId
}) => {
  const [createReaction] = useMutation(CREATE_REACTION);
  const icon = type === 'LIKE' ? '👍' : '👎';

  const handleClick = async () => {
    try {
      // Using test UUID for development
      const userId = '123e4567-e89b-12d3-a456-426614174000';
      await createReaction({
        variables: {
          type,
          postId,
          userId
        },
        refetchQueries: ['GetPosts'] // Refetch posts after reaction
      });
    } catch (error) {
      console.error('Error creating reaction:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 text-gray-600 hover:text-orange-600 transition-colors"
    >
      <span>{icon}</span>
      <span>{count}</span>
    </button>
  );
};
