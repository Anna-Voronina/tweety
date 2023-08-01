import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { StyledContainer, StyledMain } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledContainer>
      </StyledMain>
    </>
  );
};
