import React from 'react';
import {
  StyledAboutBtn,
  StyledAboutBtnPhone,
  StyledAboutCircle,
  StyledAboutHero,
  StyledAboutHeroDesc,
  StyledAboutHeroTitle,
  StyledAboutSection,
  StyledAboutWrap,
} from './AboutPage.styled';
import dollImg from '../../image/bgDollars.png';
import logoImg from '../../image/logo.png';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';

const phoneNumber = '+380999039003';
const AboutPage = () => {
  const handleClick = () => {
    window.open('https://t.me/cartel_obmen');
  };

  return (
    <>
      <StyledAboutSection>
        <StyledAboutHero>
          <img src={dollImg} alt="dollImg" />
          <StyledAboutHeroDesc>
            <StyledAboutHeroTitle>
              Current course in our Telegram bot
            </StyledAboutHeroTitle>
            <StyledAboutBtn onClick={handleClick}>
              Go to Bot <FaTelegram />
            </StyledAboutBtn>
          </StyledAboutHeroDesc>
        </StyledAboutHero>
        <StyledAboutWrap>
          <StyledAboutCircle>
            <img src={logoImg} alt="logoImg" />
            <span>BOT</span>
          </StyledAboutCircle>
        </StyledAboutWrap>
        <StyledAboutBtnPhone href={`tel:${phoneNumber}`} className="phone">
          <FaPhoneVolume />
        </StyledAboutBtnPhone>
      </StyledAboutSection>
    </>
  );
};

export default AboutPage;
