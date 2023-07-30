import {
  HomeIcon,
  NavList,
  NavListItem,
  StyledNavLink,
  TweetsIcon,
} from "./NavBar.styled";

export const NavBar = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink to="/">
            <HomeIcon />
            Home
          </StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to="/tweets">
            <TweetsIcon />
            Tweets
          </StyledNavLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};
