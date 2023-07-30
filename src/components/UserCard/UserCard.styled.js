import { styled } from "styled-components";

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 460px;
  flex-basis: calc((100% - 100px) / 3);

  padding-top: ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(9)};
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const BgImgThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: ${({ theme }) => theme.spacing(2)};

    background-color: ${({ theme }) => theme.colors.lightViolet};
    box-shadow: ${({ theme }) => theme.shadows.normal};
  }
`;

export const AvatarThumb = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;

  border: ${({ theme }) => theme.spacing(2)} solid
    ${({ theme }) => theme.colors.lightViolet};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.normal};

  & img {
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(6.5)};

  padding-top: ${({ theme }) => theme.spacing(15.5)};
`;

export const StyledInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.lightViolet};
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 196px;
  padding-top: ${({ theme }) => theme.spacing(3.5)};
  padding-bottom: ${({ theme }) => theme.spacing(3.5)};
  padding-left: ${({ theme }) => theme.spacing(14)};
  padding-right: ${({ theme }) => theme.spacing(14)};

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme, $primary }) =>
    $primary ? theme.colors.lightGreen : theme.colors.lightViolet};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:disabled {
    filter: blur(1px);
  }
`;

export const StyledLogoIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;
