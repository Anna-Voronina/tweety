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
  StyledInfoText,
  StyledLogoIcon,
  UserInfo,
} from "./UserCard.styled";

import cardBgImg from "./../../assets/images/background.png";
import cardBgImgRetina from "./../../assets/images/background@2x.png";
import cardBgImgWebp from "./../../assets/images/background.webp";
import cardBgImgWebpRetina from "./../../assets/images/background@2x.webp";
import logoIcon from "./../../assets/images/goit-logo.svg";
import { Button } from "../Button/Button";

export const UserCard = ({ userData }) => {
  const followingInProgress = useSelector(selectFollowingInProgress);
  const dispatch = useDispatch();

  const { id, avatar, user, followers, tweets, isFollowed } = userData;
  const formattedTweetsNumber = tweets.toLocaleString("en-US");
  const formattedFollowersNumber = followers.toLocaleString("en-US");

  const handleBtnClick = (id) => {
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
        <StyledLogoIcon src={logoIcon} alt="GoIT logo" />
      </BgImgThumb>

      <AvatarThumb>
        <img src={avatar} alt={user} />
      </AvatarThumb>

      <UserInfo>
        <StyledInfoText>{`${formattedTweetsNumber} tweets`}</StyledInfoText>
        <StyledInfoText>{`${formattedFollowersNumber} followers`}</StyledInfoText>
      </UserInfo>

      <Button
        label={isFollowed ? "Following" : "Follow"}
        handleClick={() => handleBtnClick(id)}
        disabled={followingInProgress.some((userId) => userId === id)}
        version={isFollowed ? "secondary" : "primary"}
      />
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
