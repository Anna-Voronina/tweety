import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

export const NavList = styled.ul`
  display: flex;
  gap: 15px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const NavListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  transition: color ${({ theme }) => theme.transitions.regular},
    transform ${({ theme }) => theme.transitions.regular};

  &.active {
    color: ${({ theme }) => theme.colors.golden};
  }

  &:hover,
  &:focus {
    transform: scale(1.08);
    color: ${({ theme }) => theme.colors.golden};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  @media only screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const HomeIcon = styled(BsFillHouseHeartFill)`
  width: 15px;
  height: 15px;

  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 1280px) {
    width: 30px;
    height: 30px;
  }
`;

export const TweetsIcon = styled(FaPeopleGroup)`
  width: 15px;
  height: 15px;

  @media only screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 1280px) {
    width: 30px;
    height: 30px;
  }
`;
