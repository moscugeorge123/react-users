import { IPost } from "../models/Post";
import { Post } from "./Post";

interface PostListProps {
  posts: IPost[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <>
      {!posts.length && <p>No posts to show</p>}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
