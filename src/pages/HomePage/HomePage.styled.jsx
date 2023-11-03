import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledNavLink = styled(NavLink)`
  padding: 11px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 15px #2a2a2a;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    /* background: ${props => props.theme.colors.gradient}; */
    box-shadow: 0 0 15px #2a2a2a;
  }
`;
