export interface BlogCommentCreate {
  blogCommentId: number;
  blogId: number;
  content: string;
  parentBlogCommentId?: number;
}

export interface BlogCommentView {
  parentBlogCommentId: number;
  blogCommentId: number;
  blogId: number;
  content: string;
  username: string;
  publishDate: Date;
  updateDate: Date;
  isEditable: boolean;
  deleteConfirm: boolean;
  isReplying: boolean;
  comments: BlogCommentView[];
}

export interface BlogComment {
  blogCommentId: number;
  blogId: number;
  content: string;
  username: string;
  applicationUserId: number;
  publishDate: Date;
  updateDate: Date;
  parentBlogCommentId?: number;
}
