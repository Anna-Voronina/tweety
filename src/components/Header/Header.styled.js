import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 15px 20px;
  margin-bottom: 15px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const NavListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.golden};
  }
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
