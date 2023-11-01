import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 auto;
  padding: 20px 20px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: ${props => props.theme.fontSizes.m};

  background: ${props => props.theme.colors.cardBackground};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};

  > nav {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 13px 10px;
  font-size: ${props => props.theme.fontSizes.s};
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.normal};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.hover};
  }

  &.active {
    color: ${props => props.theme.colors.active};
  }
`;
export const StyledLogo = styled(NavLink)`
  width: 160px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
