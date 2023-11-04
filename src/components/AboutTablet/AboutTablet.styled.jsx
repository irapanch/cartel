import styled from 'styled-components';
import BgAboutMobile from '../../image/bgDesc.jpg';

export const StyledAboutSection = styled.section`
  position: relative;
  width: 100dvw;
  min-height: calc(100vh - 100px);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.theme.colors.cardBackground};
  background-image: url(${BgAboutMobile});
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 15px;
  .phone {
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: flex;
    gap: 10px;
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;

export const StyledAboutHeroDesc = styled.div`
  max-width: 350px;
  text-align: center;
`;

export const StyledAboutHeroTitle = styled.h2`
  margin-top: 30px;
`;
export const StyledAboutHeroSubTitle = styled.h3`
  margin: 20px auto;
`;
export const StyledAboutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  margin: auto;
  border-radius: 20px;
  border: 2px solid inherit;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.ml};
  background: ${props => props.theme.colors.gradient};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.textShadow};

  &:hover,
  &:focus {
    border: 2px solid ${props => props.theme.colors.white};
  }
  > svg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #00d9ff;
    fill: #00d9ff;
  }
  &.telegram {
    border-radius: 50%;
    padding: 0;
    > svg {
      width: 45px;
      height: 45px;
    }
  }
`;

export const StyledAboutWrap = styled.div`
  width: 300px;

  > img {
    width: 300px;
    border: 2px solid ${props => props.theme.colors.muted};
    border-radius: 44px;
  }
`;

export const StyledAboutBtnPhone = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid inherit;
  background: ${props => props.theme.colors.gradient};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.textShadow};

  &:hover,
  &:focus {
    border: 2px solid ${props => props.theme.colors.white};
  }

  > svg {
    width: 27px;
    height: 27px;
  }
`;
