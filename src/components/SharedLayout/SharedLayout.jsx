import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { StyledContainer, StyledMain } from "./SharedLayout.styled";
import { Loader } from "../Loader/Loader";

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
