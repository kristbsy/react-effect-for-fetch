import { User } from "../../../types";

export default function UsersListItem({ user }: { user: User }) {
  return (
    <>
      <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>Email: {user.email}</p>
    </>
  );
}
