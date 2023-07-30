import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const NavListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: ${({ theme }) => theme.fontSizes.medium};
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
`;

export const HomeIcon = styled(BsFillHouseHeartFill)`
  width: 20px;
  height: 20px;
`;

export const TweetsIcon = styled(FaPeopleGroup)`
  width: 20px;
  height: 20px;
`;
