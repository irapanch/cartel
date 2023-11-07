import styled from 'styled-components';

export const StyledTable = styled.div`
  position: relative;
  width: 300px;
  margin: auto;
  @media screen and (min-width: 768px) {
    margin-left: 10%;
  }
`;
export const Thead = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: ${props => props.theme.colors.active};
  border-bottom: 2px solid ${props => props.theme.colors.active};
`;
export const Th = styled.li`
  padding: 5px 15px 5px 30px;
  font-weight: 600;
`;
export const Tbody = styled.div`
  font-size: 24px;
  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    margin-top: 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid ${props => props.theme.colors.active};
  }
`;
export const TdFlex = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
