import { User as IUser } from "../models/User";
import "./User.scss";

interface UserProps {
  user: IUser;
  selectUser: (userId: number) => void;
  selectedUser?: number;
}

export function User({ user, selectUser, selectedUser }: UserProps) {
  function sendUserId() {
    selectUser(user.id);
  }

  return (
    <div
      className={`user ${selectedUser === user.id && "active"}`}
      onClick={sendUserId}
    >
      <div className="image">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      </div>
      <div className="details">
        <p>{`${user.firstName} ${user.lastName}`}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
