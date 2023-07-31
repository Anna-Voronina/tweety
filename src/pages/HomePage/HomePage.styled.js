import { styled } from "styled-components";

export const HomePageWrapper = styled.div`
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 90px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 37px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 37px;
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const Title = styled.h1`
  position: relative;
  margin-bottom: 20px;

  font-size: 48px;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 62px;
  }

  @media only screen and (min-width: 1280px) {
    margin-bottom: 70px;
    font-size: 80px;
  }
`;

export const TitleShadow = styled.span`
  position: absolute;
  top: -68%;
  left: 6%;

  font-size: 60px;
  color: ${({ theme }) => theme.colors.lightGolden};
  opacity: 0.5;
  filter: blur(3px);

  @media only screen and (min-width: 768px) {
    top: -80%;
    left: 26%;
    font-size: 85px;
  }

  @media only screen and (min-width: 1280px) {
    left: 32%;
    font-size: 110px;
  }
`;

export const Slogan = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGolden};

  @media only screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 45px;
  }
`;

export const DescrText = styled.p`
  max-width: 250px;

  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.lightViolet};

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.8;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 350px;
    font-size: 35px;
  }
`;

export const Banner = styled.picture`
  @media only screen and (min-width: 1280px) {
    width: 95%;
  }
`;
