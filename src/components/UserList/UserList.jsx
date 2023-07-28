import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";
import { selectAllUsers } from "../../redux/users/selectors";

export const UserList = () => {
  const users = useSelector(selectAllUsers);

  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} userData={user} />
      ))}
    </ul>
  );
};
