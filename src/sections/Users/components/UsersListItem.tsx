import React from "react";
import { User } from "../../../types";
import { baseApiUrl } from "../../Art";

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
