import Kharkiv from 'components/Kharkiv/Kharkiv';
import Kyiv from 'components/Kyiv/Kyiv';
import Pokrovsk from 'components/Pokrovsk/Pokrovsk';
import React from 'react';
import { StyledNavLink } from './HomePage.styled';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  return (
    <>
      <ul>
        <StyledNavLink to="kyiv">
          <Kyiv />
        </StyledNavLink>
        <StyledNavLink to="kharkiv">
          <Kharkiv />
        </StyledNavLink>
        <StyledNavLink to="pokrovsk">
          <Pokrovsk />
        </StyledNavLink>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
