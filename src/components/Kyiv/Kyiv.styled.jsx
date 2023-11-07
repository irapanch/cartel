import styled from 'styled-components';

export const StyledCitySection = styled.section`
  display: flex;
  /* flex-direction: column; */
`;

export const StyledCityTitle = styled.h2`
  position: fixed;
  top: 130px;
  text-align: center;
  left: 0;
  right: 0;
  max-width: 390px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 110px;
    left: 8%;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const StyledMap = styled.div`
  display: none;
  > img {
    max-width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    display: block;
    max-width: 350px;
    margin-right: auto;
  }
`;
