import React from 'react';
import { StyledHeader, StyledLogo, StyledNavLink } from './TabletHeader.styled';
import logoImg from '../../image/logo.png';

const TabletHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <img src={logoImg} alt="logoImg" />
      </StyledLogo>
      <nav>
        <StyledNavLink to="/">
          <span>Currency exchange</span>
        </StyledNavLink>
        <StyledNavLink to="/transfers">
          <span>Money transfers</span>
        </StyledNavLink>
        <StyledNavLink to="/departments">
          <span>Our departments</span>
        </StyledNavLink>
        <StyledNavLink to="/contacts">
          <span>Contacts</span>
        </StyledNavLink>
      </nav>
    </StyledHeader>
  );
};

export default TabletHeader;
