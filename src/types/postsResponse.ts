export type PostsResponse = Array<Post>;

export interface Post {
  createdAt: Date;
  authorName: string;
  authorAvatar: string;
  postText: string;
  postImage: string;
  id: string;
}
