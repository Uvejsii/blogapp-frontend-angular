export interface BlogCreate {
  blogId: number;
  title: string;
  content: string;
  photoId?: string;
}

export interface BlogPaging {
  page: number;
  pagesSize: number;
}

export interface Blog {
  blogId: number;
  title: string;
  content: string;
  applicationUserId: number;
  username: string;
  publishDate: Date;
  updateDate: Date;
  deleteConfirm: boolean;
  photoId?: number;
}

export interface PagedResoults {
  items: Array<any>;
  totalCount: number;
}
