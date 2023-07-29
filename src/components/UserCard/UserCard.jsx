import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchAllUsersThunk,
  updateUserFollowersThunk,
} from "../../redux/users/operations";
import { selectFollowingInProgress } from "../../redux/users/selectors";
import {
  AvatarThumb,
  BgImgThumb,
  Card,
  StyledButton,
  StyledInfoText,
  UserInfo,
} from "./UserCard.styled";

import cardBgImg from "./../../assets/background.png";
import cardBgImgRetina from "./../../assets/background@2x.png";
import cardBgImgWebp from "./../../assets/background.webp";
import cardBgImgWebpRetina from "./../../assets/background@2x.webp";

export const UserCard = ({ userData }) => {
  const followingInProgress = useSelector(selectFollowingInProgress);
  const dispatch = useDispatch();

  const { id, avatar, user, followers, tweets, isFollowed } = userData;

  const handleClick = (id) => {
    dispatch(
      updateUserFollowersThunk({
        id,
        updatedFollowers: isFollowed ? followers - 1 : followers + 1,
        isFollowed: !isFollowed,
      })
    ).then(() => {
      dispatch(fetchAllUsersThunk());
    });
  };

  return (
    <Card>
      <BgImgThumb>
        <picture>
          <source
            srcSet={`${cardBgImgWebp} 1x, ${cardBgImgWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${cardBgImg} 1x, ${cardBgImgRetina} 2x`}
            type="image/png"
          />
          <img src={cardBgImg} alt="messages" />
        </picture>
      </BgImgThumb>

      <AvatarThumb>
        <img src={avatar} alt={user} />
      </AvatarThumb>

      <UserInfo>
        <StyledInfoText>{`${tweets} tweets`}</StyledInfoText>
        <StyledInfoText>{`${followers} followers`}</StyledInfoText>
      </UserInfo>

      <StyledButton
        onClick={() => handleClick(id)}
        disabled={followingInProgress.some((userId) => userId === id)}
        type="button"
        $primary={isFollowed}
      >
        {isFollowed ? "Following" : "Follow"}
      </StyledButton>
    </Card>
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
