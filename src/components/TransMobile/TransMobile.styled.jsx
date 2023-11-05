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
  justify-content: flex-start;
  .phone {
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: flex;
    gap: 10px;
  }
  > h2 {
    padding: 10px;
    text-align: center;
  }
`;
export const StyledAboutHero = styled.div`
  position: relative;
  max-width: 500px;
  display: block;
  text-align: center;
  padding: 20px;
  margin: 20px auto;
  border-radius: 15px;
  background: ${props => props.theme.colors.lightAccent};
  color: ${props => props.theme.colors.black};

  > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
    color: ${props => props.theme.colors.white};
  }
`;

export const StyledtBtnPhone = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  margin: auto;
  font-weight: ${props => props.theme.fontWeights.medium};

  color: ${props => props.theme.colors.white};
  background-color: inherit;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.active};
  }
  .bold {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  > svg {
    width: 30px;
    height: 30px;
    padding: 3px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.active};
    border: 1px solid ${props => props.theme.colors.active};
    fill: ${props => props.theme.colors.white};
  }
  > img {
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.muted};
  }
  &.telegram {
    > svg {
      width: 30px;
      height: 30px;
      padding: 0;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.white};
      border: 1px solid #00d9ff;
      fill: #00d9ff;
    }
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

export const StyledAboutBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #00d9ff;
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
    fill: #00d9ff;
    padding: 0;
  }
  &.teleg {
    border-radius: 50%;
    padding: 0;
    > svg {
      width: 43px;
      height: 43px;
    }
  }
`;
