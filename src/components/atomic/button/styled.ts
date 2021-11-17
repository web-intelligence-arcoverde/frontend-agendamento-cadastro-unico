import styled from 'styled-components';
import { COLORS } from 'src/constants';
export const Container = styled.div`
  
`;
export const Btn =styled.button`
font-family: 'Roboto', sans-serif;
height: 60px;
width: 70%;
color: ${COLORS.primaryWhite};
background: linear-gradient(
-90deg
,#38a533 0%,#0a7549 100%);
border-radius: 7px;
border: none;
font-weight: bold;
font-size: 15px;
:hover{
  cursor: pointer;
  background: ${COLORS.secondGreen};
}
`