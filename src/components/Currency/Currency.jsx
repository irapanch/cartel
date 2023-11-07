import React from 'react';
import dollIcon from '../../image/doll3d.png';
import eurIcon from '../../image/euro3d.jpg';
import plnIcon from '../../image/pol3d.jpg';
import { currencyKyiv } from '../../data/constants';
import { StyledTable, Tbody, TdFlex, Th, Thead } from './Currency.styled';

const Currency = () => {
  return (
    <StyledTable>
      <Thead>
        <Th>Валюта</Th>
        <Th>Купівля</Th>
        <Th>Продаж</Th>
      </Thead>
      <Tbody>
        <ul>
          <TdFlex>
            <img src={dollIcon} alt="dollIcon" width="45px" />
            USD
          </TdFlex>
          <li>{currencyKyiv.usdBuy}</li>
          <li>{currencyKyiv.usdSell}</li>
        </ul>
        <ul>
          <TdFlex>
            <img src={eurIcon} alt="eurIcon" width="45px" />
            EUR
          </TdFlex>
          <li>{currencyKyiv.euroBuy}</li>
          <li>{currencyKyiv.euroSell}</li>
        </ul>
        <ul>
          <TdFlex>
            <img src={plnIcon} alt="dollIcon" width="45px" />
            PLN
          </TdFlex>
          <li>{currencyKyiv.plnBuy} </li>
          <li>{currencyKyiv.plnSell} </li>
        </ul>
      </Tbody>
    </StyledTable>
  );
};

export default Currency;
