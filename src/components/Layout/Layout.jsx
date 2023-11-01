import React from 'react';
import { StyledContainer } from './Layout.styled';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import MobilHeader from 'components/MobilHeader/MobilHeader';
import TabletHeader from 'components/TabletHeader/TabletHeader';

const Layout = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <StyledContainer>
      {isMobile && <MobilHeader />}
      {isDesktopOrTablet && <TabletHeader />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default Layout;
