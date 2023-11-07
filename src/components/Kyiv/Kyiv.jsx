import React from 'react';
import { StyledCitySection, StyledCityTitle, StyledMap } from './Kyiv.styled';
import Currency from 'components/Currency/Currency';
import map from '../../image/KyivMap_1.png';
const Kyiv = () => {
  return (
    <StyledCitySection>
      <StyledCityTitle>Current exchange rate in Kyiv</StyledCityTitle>
      <Currency />
      <StyledMap>
        <img src={map} alt="Kyiv" />
      </StyledMap>
    </StyledCitySection>
  );
};

export default Kyiv;
