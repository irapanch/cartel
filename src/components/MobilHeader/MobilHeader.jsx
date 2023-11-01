import React from 'react';
import { StyledHeader, StyledLogo, StyledNavLink } from './MobilHeader.styled';
import logoImg from '../../image/logo.png';
import { MdCurrencyExchange } from 'react-icons/md';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaMagnifyingGlassLocation } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';

const MobilHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <img src={logoImg} alt="logoImg" />
      </StyledLogo>
      <nav>
        <StyledNavLink to="/">
          <MdCurrencyExchange />
        </StyledNavLink>
        <StyledNavLink to="/transfers">
          <FaMoneyBillTransfer />
        </StyledNavLink>
        <StyledNavLink to="/departments">
          <FaMagnifyingGlassLocation />
        </StyledNavLink>
        <StyledNavLink to="/contacts">
          <FaTelegram />
        </StyledNavLink>
      </nav>
    </StyledHeader>
  );
};

export default MobilHeader;
