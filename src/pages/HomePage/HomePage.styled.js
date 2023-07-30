import { styled } from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
`;

export const DescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-left: 35px;
`;

export const Title = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
`;

export const TitleShadow = styled.span`
  position: absolute;
  top: -50px;
  left: -32px;

  font-size: 70px;
  color: ${({ theme }) => theme.colors.lightGolden};
  opacity: 0.5;
  filter: blur(3px);
`;

export const Slogan = styled.h2`
  font-size: 26px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGolden};
`;

export const DescrText = styled.p`
  max-width: 250px;

  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.lightViolet};
`;

export const Banner = styled.picture`
  width: 60%;
  margin-left: auto;
`;
