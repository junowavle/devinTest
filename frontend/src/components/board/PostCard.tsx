import React, { useState } from 'react';
import { shadows } from '../../styles/colors';
import { Post, Comment as CommentType } from '../../types';
import { ReactionButton } from './ReactionButton';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT, GET_POSTS } from '../../graphql/queries';
import { Comment } from './Comment';

interface PostCardProps {
  post: Post;
  onEdit?: (data: { title: string; content: string; thumbnailUrl?: string }) => void;
  onDelete?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
  onAddComment?: (content: string) => void;
  currentUserId?: string;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onEdit, onDelete, currentUserId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: post.title,
    content: post.content,
    thumbnailUrl: post.thumbnailUrl || ''
  });
  const [commentContent, setCommentContent] = useState('');
  const [createComment] = useMutation(CREATE_COMMENT);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onEdit) {
      onEdit(editFormData);
      setIsEditing(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    try {
      // Using test UUID for development
      const authorId = '123e4567-e89b-12d3-a456-426614174000';
      await createComment({
        variables: {
          postId: post.id,
          content: commentContent,
          authorId
        },
        refetchQueries: [{ query: GET_POSTS }],
      });
      setCommentContent('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const getLikeCount = () => {
    return post.reactions?.filter(reaction => reaction.type === 'LIKE').length || 0;
  };

  const getDislikeCount = () => {
    return post.reactions?.filter(reaction => reaction.type === 'DISLIKE').length || 0;
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg overflow-hidden p-4" style={{ boxShadow: shadows.medium }}>
        <form onSubmit={handleEditSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={editFormData.title}
              onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Thumbnail URL</label>
            <input
              type="text"
              value={editFormData.thumbnailUrl}
              onChange={(e) => setEditFormData({ ...editFormData, thumbnailUrl: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              value={editFormData.content}
              onChange={(e) => setEditFormData({ ...editFormData, content: e.target.value })}
              className="w-full p-2 border rounded resize-none"
              rows={4}
              required
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-lg overflow-hidden"
      style={{ boxShadow: shadows.medium }}
    >
      {post.thumbnailUrl && (
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-2">By {post.author?.name || 'Anonymous'}</p>
        <p className="text-gray-800">{post.content}</p>
        <div className="flex items-center gap-4 mt-4">
          <ReactionButton
            count={getLikeCount()}
            type="LIKE"
            postId={post.id}
          />
          <ReactionButton
            count={getDislikeCount()}
            type="DISLIKE"
            postId={post.id}
          />
          {onEdit && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-orange-600 hover:text-orange-700"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        {/* Comments Section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-4">Comments</h4>
          <div className="space-y-4">
            {post.comments?.map((comment: CommentType) => (
              <Comment
                key={comment.id}
                {...comment}
                onDelete={
                  currentUserId === comment.author?.id
                    ? () => {/* TODO: Implement delete comment */}
                    : undefined
                }
              />
            ))}
          </div>
          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mt-4">
            <textarea
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              placeholder="Write a comment..."
              rows={2}
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
            >
              Add Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
