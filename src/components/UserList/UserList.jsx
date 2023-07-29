import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";
import { selectFilteredData } from "../../redux/users/selectors";
import { useState } from "react";

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} userData={user} />
      ))}
    </ul>
  );
};
