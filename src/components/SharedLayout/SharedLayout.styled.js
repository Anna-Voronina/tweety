import { styled } from "styled-components";

export const StyledMain = styled.main``;

export const StyledContainer = styled.div`
  max-width: 320px;
  padding: 0 20px;
  padding-bottom: 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
