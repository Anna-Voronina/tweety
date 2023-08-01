import { LogoLink, LogoPicture, StyledHeader } from "./Header.styled";
import { NavBar } from "../NavBar/NavBar";

import logoImg from "./../../assets/images/logo.png";
import logoImgRetina from "./../../assets/images/logo@2x.png";
import logoImgWebp from "./../../assets/images/logo.webp";
import logoImgWebpRetina from "./../../assets/images/logo@2x.webp";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoLink to="/">
        <LogoPicture>
          <source
            srcSet={`${logoImgWebp} 1x, ${logoImgWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${logoImg} 1x, ${logoImgRetina} 2x`}
            type="image/png"
          />
          <img src={logoImg} alt="logo" />
        </LogoPicture>
      </LogoLink>
      <NavBar />
    </StyledHeader>
  );
};
