import React from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledNavLink,
} from './Layout.styled';
import logoImg from '../../image/logo.png';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo to="/">
          <img src={logoImg} alt="logoImg" />
        </StyledLogo>
        <nav>
          <StyledNavLink to="/">Currency exchange</StyledNavLink>
          <StyledNavLink to="/transfers">money transfers</StyledNavLink>
          <StyledNavLink to="/departments">Our departments</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
