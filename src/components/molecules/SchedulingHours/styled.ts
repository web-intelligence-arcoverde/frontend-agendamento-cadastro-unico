import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;

padding-bottom: 20px;

`


export const CardHours = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  background: ${COLORS.thirdGreen};
 
  margin-top: 10px;
  padding: 15px;
  color: ${COLORS.primaryWhite};
  border-radius: 7px;
  border: none;
  
  @media (min-width:768px) {
    width: 47%;
  }
  
  :hover {
    background-color: ${COLORS.secondGreen};
  }
`;
