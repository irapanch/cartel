import React from 'react';
import {
  StyledCitySection,
  StyledCityTitle,
  StyledMap,
} from 'components/Kyiv/Kyiv.styled';
import Currency from 'components/Currency/Currency';
import map from '../../image/PokrovskMap_1.png';

const Pokrovsk = () => {
  return (
    <StyledCitySection>
      <StyledCityTitle>Current exchange rate in Pokrovsk</StyledCityTitle>
      <Currency />
      <StyledMap>
        <img src={map} alt="Pokrovsk" />
      </StyledMap>
    </StyledCitySection>
  );
};

export default Pokrovsk;
