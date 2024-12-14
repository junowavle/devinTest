export interface User {
  id: string;
  name: string;
}

export interface Reaction {
  id: string;
  type: 'LIKE' | 'DISLIKE';
  userId: string;
  postId?: string;
  commentId?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  reactions?: Reaction[];
  createdAt: string;
  updatedAt?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnailUrl?: string;
  createdAt: string;
  author: User;
  reactions?: Reaction[];
  comments?: Comment[];
}
