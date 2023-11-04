import React from 'react';
import {
  StyledAboutBtn,
  StyledAboutBtnPhone,
  StyledAboutHeroDesc,
  StyledAboutHeroSubTitle,
  StyledAboutHeroTitle,
  StyledAboutSection,
  StyledAboutWrap,
} from './AboutTablet.styled';

import smartImg from '../../image/smartImg.png';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';

const phoneNumber = '+380999039003';
const AboutTablet = () => {
  const handleClick = () => {
    window.open('https://t.me/cartel_obmen');
  };
  return (
    <StyledAboutSection>
      <StyledAboutHeroDesc>
        <StyledAboutHeroTitle>
          The current exchange rate is always nearby in our telegram bot
        </StyledAboutHeroTitle>
        <StyledAboutHeroSubTitle>
          get a favorable rate and reserve the required amount in your
          smartphone
        </StyledAboutHeroSubTitle>
        <StyledAboutBtn onClick={handleClick}>
          Go to Bot <FaTelegram />
        </StyledAboutBtn>
      </StyledAboutHeroDesc>

      <StyledAboutWrap>
        <img src={smartImg} alt="smartImg " />
      </StyledAboutWrap>
      <div className="phone">
        <StyledAboutBtnPhone href={`tel:${phoneNumber}`}>
          <FaPhoneVolume />
        </StyledAboutBtnPhone>
        <StyledAboutBtn onClick={handleClick} className="telegram">
          <FaTelegram />
        </StyledAboutBtn>
      </div>
    </StyledAboutSection>
  );
};

export default AboutTablet;
