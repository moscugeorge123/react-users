import { useEffect, useState } from "react";
import "./Users.scss";
import { UserList } from "./components/UserList";
import { PostList } from "./components/PostList";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(-1);

  const getUsers = async () => {
    try {
      const users = await fetch("https://dummyjson.com/users?limit=10").then(
        (r) => r.json()
      );
      setUsers(users.users);
      console.log(users.users);
    } catch (error) {
      console.log("Error at fetching users", error);
    }
  };

  const getPosts = async (userId: number) => {
    try {
      const posts = await fetch(
        `https://dummyjson.com/posts/user/${userId}`
      ).then((r) => r.json());
      setPosts(posts.posts);
      console.log(posts.posts);
    } catch (error) {
      console.log("Error at fetching posts", error);
    }
  };

  const selectUser = (userId: number) => {
    setSelectedUser(userId);
    getPosts(userId);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="users-page">
      <div className="user-list">
        <UserList
          selectedUser={selectedUser}
          selectUser={selectUser}
          users={users}
        />
      </div>
      <div className="post-list">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
