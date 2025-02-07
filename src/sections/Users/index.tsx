import React, { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import { User } from "../../types";
import { baseApiUrl } from "../Art";

async function getUsers(): Promise<User[]> {
  return await (await fetch(`${baseApiUrl}/kristbsy/contact`)).json();
}

function UsersSection() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  );
}

export default UsersSection;
