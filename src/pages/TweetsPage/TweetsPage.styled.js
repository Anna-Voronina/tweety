import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { HiArrowLeft } from "react-icons/hi";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 150px;

  padding: ${({ theme }) => theme.spacing(3)};

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightViolet};

  border: 3px solid ${({ theme }) => theme.colors.lightViolet};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.button};

  transition: transform ${({ theme }) => theme.transitions.regular},
    color ${({ theme }) => theme.transitions.regular},
    border-color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: ${({ theme }) => theme.colors.golden};
    border-color: ${({ theme }) => theme.colors.golden};
  }
`;

export const ArrowIcon = styled(HiArrowLeft)`
  width: 30px;
  height: 20px;
`;
