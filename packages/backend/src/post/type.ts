export type PostType = {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
  published: boolean;
  authorId?: string;
  createdAt: Date;
  updatedAt: Date;
};
