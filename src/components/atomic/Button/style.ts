import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const ButtonStyle = styled.button`
  font-family: 'Roboto', sans-serif;
  height: 52px;
  width: 100%;
  color: ${COLORS.primaryWhite};
  background: linear-gradient(
  -90deg
  ,${COLORS.primaryGreen} 0%,${COLORS.secondaryGreen} 100%);
  border-radius: 6px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  
  :hover{
    cursor: pointer;
    background: ${COLORS.secondGreen};
  }
`