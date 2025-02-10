import { IPost } from "../models/Post";
import "./Post.scss";

export function Post({ post }: { post: IPost }) {
  return (
    <div className="post">
      <p className="title">{post.title}</p>
      <p className="body">{post.body}</p>
    </div>
  );
}
