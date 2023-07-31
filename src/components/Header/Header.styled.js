import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const LogoLink = styled(Link)`
  width: 100px;
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.08);
  }

  @media only screen and (min-width: 768px) {
    width: 170px;
  }

  @media only screen and (min-width: 1280px) {
    width: 250px;
  }
`;

export const LogoPicture = styled.picture`
  display: block;
`;
