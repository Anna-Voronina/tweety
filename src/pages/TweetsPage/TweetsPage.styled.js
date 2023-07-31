import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { HiArrowLeft } from "react-icons/hi";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 150px;

  margin: 15px auto;
  padding: ${({ theme }) => theme.spacing(2)};

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

  @media only screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(3)};
    margin: 10px 0;
  }

  @media only screen and (min-width: 1280px) {
    margin: 15px 0;
  }
`;

export const ArrowIcon = styled(HiArrowLeft)`
  width: 30px;
  height: 20px;
`;
