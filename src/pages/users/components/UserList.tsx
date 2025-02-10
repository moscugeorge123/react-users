import { User as IUser } from "../models/User";
import { User } from "./User";

interface UserListProps {
  users: IUser[];
  selectUser: (userId: number) => void;
  selectedUser?: number;
}

export function UserList({ users, selectUser, selectedUser }: UserListProps) {
  return (
    <>
      {users.map((user) => (
        <User
          selectedUser={selectedUser}
          selectUser={selectUser}
          key={user.id}
          user={user}
        />
      ))}
    </>
  );
}
