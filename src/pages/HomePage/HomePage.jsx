import {
  Banner,
  ContentWrapper,
  DescrText,
  DescrWrapper,
  HomePageWrapper,
  Slogan,
  Title,
  TitleShadow,
} from "./HomePage.styled";

import bannerImg from "./../../assets/images/banner.png";
import bannerImgRetina from "./../../assets/images/banner@2x.png";
import bannerImgWebp from "./../../assets/images/banner.webp";
import bannerImgWebpRetina from "./../../assets/images/background@2x.webp";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Title>
        Tweety
        <TitleShadow>Tweety</TitleShadow>
      </Title>
      <ContentWrapper>
        <DescrWrapper>
          <Slogan>Where the world comes together.</Slogan>
          <DescrText>
            Connect with friends, share your thoughts, and discover new things.
          </DescrText>
        </DescrWrapper>
        <Banner>
          <source
            srcSet={`${bannerImgWebp} 1x, ${bannerImgWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${bannerImg} 1x, ${bannerImgRetina} 2x`}
            type="image/png"
          />
          <img src={bannerImg} alt="tweety banner" />
        </Banner>
      </ContentWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
