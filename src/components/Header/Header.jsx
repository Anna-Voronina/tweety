import {
  LogoLink,
  LogoPicture,
  NavList,
  NavListItem,
  StyledHeader,
  StyledNavLink,
} from "./Header.styled";
import logoImg from "./../../assets/logo.png";
import logoImgRetina from "./../../assets/logo@2x.png";
import logoImgWebp from "./../../assets/logo.webp";
import logoImgWebpRetina from "./../../assets/logo@2x.webp";

const links = [
  { path: "/", title: "Home" },
  { path: "/tweets", title: "Tweets" },
];

export const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <LogoPicture>
          <source
            srcSet={`${logoImgWebp} 1x, ${logoImgRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${logoImg} 1x, ${logoImgWebpRetina} 2x`}
            type="image/png"
          />
          <img src={logoImg} alt="logo" />
        </LogoPicture>
      </LogoLink>
      <nav>
        <NavList>
          {links.map(({ path, title }) => (
            <NavListItem key={title}>
              <StyledNavLink to={path}>{title}</StyledNavLink>
            </NavListItem>
          ))}
        </NavList>
      </nav>
    </StyledHeader>
  );
};
