import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BgAboutMobile from '../../image/bgDesc.jpg';

export const StyledHomeSection = styled.section`
  position: relative;
  width: 100dvw;
  min-height: calc(100vh - 125px);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.theme.colors.cardBackground};
  background-image: url(${BgAboutMobile});
  display: flex;
  flex-direction: column;
  .phone {
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: flex;
    gap: 10px;
  }
`;

export const StyledListCities = styled.ul`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 10%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.ml};
  background: ${props => props.theme.colors.gradient};
  border: 2px solid ${props => props.theme.colors.gradient};
  color: ${props => props.theme.colors.white};

  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.shadows.textShadow};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.shadows.textShadow};
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
  &.teleg {
    border-radius: 50%;
    padding: 0;
    > svg {
      width: 45px;
      height: 45px;
    }
  }
`;
