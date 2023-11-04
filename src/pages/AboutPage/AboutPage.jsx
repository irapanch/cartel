import AboutMobile from 'components/AboutMobile/AboutMobile';
import AboutTablet from 'components/AboutTablet/AboutTablet';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const AboutPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
      {isMobile && <AboutMobile />}
      {isDesktopOrTablet && <AboutTablet />}
    </>
  );
};

export default AboutPage;
