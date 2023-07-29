import PropTypes from "prop-types";
import { UserCard } from "../UserCard/UserCard";
import { CardList } from "./UserList.styled";

export const UserList = ({ users }) => {
  return (
    <CardList>
      {users.map((user) => (
        <UserCard key={user.id} userData={user} />
      ))}
    </CardList>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      avatar: PropTypes.string,
      followers: PropTypes.number,
      tweets: PropTypes.number,
      isFollowed: PropTypes.bool,
    }).isRequired
  ).isRequired,
};
