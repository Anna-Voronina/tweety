import { css, styled } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  min-width: 196px;
  padding-top: ${({ theme }) => theme.spacing(3.5)};
  padding-bottom: ${({ theme }) => theme.spacing(3.5)};
  padding-left: ${({ theme }) => theme.spacing(14)};
  padding-right: ${({ theme }) => theme.spacing(14)};

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:disabled {
    filter: blur(1px);
  }

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  ${({ version }) =>
    version === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.lightViolet};
    `};

  ${({ version }) =>
    version === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.colors.lightGreen};
    `};

  ${({ version }) =>
    version === "third" &&
    css`
      min-width: 150px;
      padding-top: ${({ theme }) => theme.spacing(2.5)};
      padding-bottom: ${({ theme }) => theme.spacing(2.5)};
      padding-left: ${({ theme }) => theme.spacing(8)};
      padding-right: ${({ theme }) => theme.spacing(8)};

      color: ${({ theme }) => theme.colors.lightViolet};
      background-color: transparent;
      border: 3px solid ${({ theme }) => theme.colors.lightViolet};

      transition: transform ${({ theme }) => theme.transitions.regular},
        color ${({ theme }) => theme.transitions.regular},
        border-color ${({ theme }) => theme.transitions.regular};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.lightGreen};
        border-color: ${({ theme }) => theme.colors.lightGreen};
      }
    `};
`;
