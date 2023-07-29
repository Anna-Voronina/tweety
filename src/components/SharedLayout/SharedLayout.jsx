import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { StyledContainer, StyledMain } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </StyledContainer>
      </StyledMain>
    </>
  );
};
