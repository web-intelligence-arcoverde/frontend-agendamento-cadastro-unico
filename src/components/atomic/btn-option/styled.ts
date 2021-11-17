import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  p{
    margin-top: 3px;
    font-size: 17px;
    font-weight: normal;
  }
  
  button {
    
    background:${COLORS.thirdGreen};
  color: ${COLORS.primaryWhite};
  height: 150px;
  width: 95%;
  text-align: center;
  border: none;
  border-radius: 6px;
  font-size: 23px;
  font-weight: bold;
  
  :hover{
    cursor: pointer;
    background-color: ${COLORS.secondGreen};
  }
  }
`


/**span click aqui dentro btn-button */

export const Click =styled.span`
position: absolute;
color: #FFF;
margin-top: 16px;
margin-left: 10px;
left: 20px;
font-size: 9px;
font-weight: small;
background-color: #4caf50;
padding: 6px;
border-radius: 10px;

`
;
