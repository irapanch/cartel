import styled from 'styled-components';
import BgAboutMobile from '../../image/bgDesc.jpg';

export const StyledAboutSection = styled.section`
  position: relative;
  width: 100dvw;
  min-height: calc(100vh - 125px);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.theme.colors.cardBackground};
  background-image: url(${BgAboutMobile});
  display: flex;
  flex-direction: column;
  justify-content: center;
  .phone {
    position: fixed;
    bottom: 25px;
    right: 25px;
  }
`;
export const StyledAboutHero = styled.div`
  position: relative;
  max-width: 500px;
  display: block;
  text-align: center;
  margin: 0 auto;

  > img {
    filter: brightness(25%);
  }
`;
export const StyledAboutHeroDesc = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 426px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const StyledAboutHeroTitle = styled.h3`
  margin: 10px auto;
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
`;

export const StyledAboutWrap = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid ${props => props.theme.colors.muted};
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.textShadow};
  margin: 0 auto;
`;
export const StyledAboutCircle = styled.div`
  width: 292px;
  height: 292px;
  border: 4px solid ${props => props.theme.colors.white};
  background: radial-gradient(circle, #000000 9.4%, #686868 91.91%);
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.textShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  > img {
    width: 260px;
  }
  > span {
    font-size: 40px;
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.accent};
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
