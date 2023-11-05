import React from 'react';
import {
  StyledAboutBtn,
  StyledAboutBtnPhone,
  StyledAboutHero,
  StyledAboutSection,
  StyledText,
  StyledtBtnPhone,
} from './TransTablet.styled';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import viberIcon from '../../image/viber.png';

const phoneNumber = '+380994404466';

const TransTablet = () => {
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
        <StyledText>
          <p>
            We are happy to offer you exactly what you are looking for - a fast
            and secure system of transfers across <span>Ukraine</span> and the{' '}
            <span>world</span> in any currency with the most favorable
            conditions.
          </p>
          <p>
            We have done everything to make this service convenient, simple,
            profitable and safe for you. Because we value your time and our
            reputation.
          </p>
          <p>
            There are pick-up and drop-off points in all major cities of each
            region of Ukraine. Payment at the cash desk is possible both in cash
            and with any card. The money will be available to the recipient on
            the day of sending. We guarantee complete confidentiality of
            participants. Our service can be used by bothcitizens and
            entrepreneurs to pay for goods and services.
          </p>
        </StyledText>
        <div>
          <h3 className="subtitle">Contact the manager</h3>
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
              <StyledtBtnPhone
                onClick={handleClickTelegram}
                className="telegram"
              >
                <FaTelegram />
                <span>Write in Telegram</span>
              </StyledtBtnPhone>
            </li>
          </ul>
        </div>
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

export default TransTablet;
