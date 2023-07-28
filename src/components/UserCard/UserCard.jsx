import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchAllUsersThunk,
  updateUserFollowersThunk,
} from "../../redux/users/operations";
import { selectIsLoading, selectLimit } from "../../redux/users/selectors";

export const UserCard = ({ userData }) => {
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { id, avatar, user, followers, tweets, isFollowed } = userData;

  const handleClick = (id) => {
    dispatch(
      updateUserFollowersThunk({
        id,
        updatedFollowers: isFollowed ? followers - 1 : followers + 1,
        isFollowed: !isFollowed,
      })
    ).then(() => dispatch(fetchAllUsersThunk(limit)));
  };

  return (
    <li>
      <img src={avatar} alt={user} />
      <p>{`${tweets} tweets`}</p>
      <p>{`${followers} followers`}</p>
      <button
        onClick={() => handleClick(id)}
        disabled={isLoading}
        type="button"
      >
        {isFollowed ? "Following" : "Follow"}
      </button>
    </li>
  );
};

UserCard.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    tweets: PropTypes.number,
    isFollowed: PropTypes.bool,
  }).isRequired,
};
