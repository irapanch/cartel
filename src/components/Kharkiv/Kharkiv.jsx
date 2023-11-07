import Currency from 'components/Currency/Currency';
import {
  StyledCitySection,
  StyledCityTitle,
  StyledMap,
} from 'components/Kyiv/Kyiv.styled';
import React from 'react';

import map from '../../image/KharkivMap_1.png';

const Kharkiv = () => {
  return (
    <StyledCitySection>
      <StyledCityTitle>Current exchange rate in Kharkiv</StyledCityTitle>
      <Currency />
      <StyledMap>
        <img src={map} alt="Kharkiv" />
      </StyledMap>
    </StyledCitySection>
  );
};

export default Kharkiv;
