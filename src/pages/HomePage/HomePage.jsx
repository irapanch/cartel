import React from 'react';
import {
  StyledAboutBtn,
  StyledAboutBtnPhone,
  StyledHomeSection,
  StyledListCities,
  StyledNavLink,
} from './HomePage.styled';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const phoneNumber = '+380994404466';

const HomePage = () => {
  const handleClickTelegram = () => {
    window.open('https://t.me/cartel_obmen');
  };
  return (
    <StyledHomeSection>
      <StyledListCities>
        <StyledNavLink to="kyiv">Kyiv</StyledNavLink>
        <StyledNavLink to="kharkiv">Kharkiv</StyledNavLink>
        <StyledNavLink to="pokrovsk">Pokrovsk</StyledNavLink>
      </StyledListCities>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <div className="phone">
        <StyledAboutBtnPhone href={`tel:${phoneNumber}`}>
          <FaPhoneVolume />
        </StyledAboutBtnPhone>
        <StyledAboutBtn onClick={handleClickTelegram} className="teleg">
          <FaTelegram />
        </StyledAboutBtn>
      </div>
    </StyledHomeSection>
  );
};

export default HomePage;
