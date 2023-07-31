import { InfinitySpin } from "react-loader-spinner";
import { LoaderTitle, LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <InfinitySpin width="200" color="#ffffff" />
      <LoaderTitle>Loading...</LoaderTitle>
    </LoaderWrapper>
  );
};
