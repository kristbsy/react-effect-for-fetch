import { User } from "../../../types";
import UsersListItem from "./UsersListItem";

export default function UsersList({ users }: { users: User[] }) {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li style={{ background: user.favouriteColour }} key={user.id}>
          <UsersListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
