import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 10px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
  background: ${props => props.theme.colors.cardBackground};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};

  > nav {
    display: flex;
    justify-content: space-around;
    gap: 46px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  > svg {
    fill: ${props => props.theme.colors.white};

    width: 40px;
    height: 40px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
      fill: ${props => props.theme.colors.hover};
    }
  }
  &.active {
    > svg {
      fill: ${props => props.theme.colors.active};
    }
  }
`;
export const StyledLogo = styled(NavLink)`
  width: 100px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
