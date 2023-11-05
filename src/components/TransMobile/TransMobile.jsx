import React from 'react';
import {
  StyledAboutBtn,
  StyledAboutBtnPhone,
  StyledAboutHero,
  StyledAboutSection,
  StyledtBtnPhone,
} from './TransMobile.styled';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import viberIcon from '../../image/viber.png';

const phoneNumber = '+380994404466';

const TransMobile = () => {
  const handleClickTelegram = () => {
    window.open('https://t.me/cartel_obmen');
  };
  const handleClickViber = () => {
    window.open('https://t.me/cartel_obmen');
  };
  return (
    <StyledAboutSection>
      <h2>Looking for the easiest and cheapest way to transfer money?</h2>
      <StyledAboutHero>
        <h3>Contact the manager</h3>
        <ul>
          <li>
            <StyledtBtnPhone href={`tel:${phoneNumber}`}>
              <FaPhoneVolume />
              <span className="bold">099 440 44 66</span>
            </StyledtBtnPhone>
          </li>
          <li>
            <StyledtBtnPhone onClick={handleClickViber}>
              <img src={viberIcon} alt="viberIcon" width="33px" />
              <span>Write in Viber</span>
            </StyledtBtnPhone>
          </li>
          <li>
            <StyledtBtnPhone onClick={handleClickTelegram} className="telegram">
              <FaTelegram />
              <span>Write in Telegram</span>
            </StyledtBtnPhone>
          </li>
        </ul>
      </StyledAboutHero>
      <div className="phone">
        <StyledAboutBtnPhone href={`tel:${phoneNumber}`}>
          <FaPhoneVolume />
        </StyledAboutBtnPhone>
        <StyledAboutBtn onClick={handleClickTelegram} className="teleg">
          <FaTelegram />
        </StyledAboutBtn>
      </div>
    </StyledAboutSection>
  );
};

export default TransMobile;
