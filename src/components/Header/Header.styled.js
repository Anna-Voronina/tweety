import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
  margin-bottom: 15px;
`;

export const LogoLink = styled(Link)`
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.08);
  }
`;

export const LogoPicture = styled.picture`
  display: block;
  width: 170px;
  height: 40px;
`;
