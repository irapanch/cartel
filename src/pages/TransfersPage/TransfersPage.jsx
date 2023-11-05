import TransMobile from 'components/TransMobile/TransMobile';
import TransTablet from 'components/TransTablet/TransTablet';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const TransfersPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
      {isMobile && <TransMobile />}
      {isDesktopOrTablet && <TransTablet />}
    </>
  );
};

export default TransfersPage;
