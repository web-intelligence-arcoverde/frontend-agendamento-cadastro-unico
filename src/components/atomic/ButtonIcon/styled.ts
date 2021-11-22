import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
   width: 100%;
    display: flex;
   
  button {
    width: 100%;
    height: 48px;
    border-radius: 6px;
    border: none;
    color: ${COLORS.primaryWhite};
    background:${COLORS.thirdGreen};
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 20px;
    margin-right: 5px;
    
    
    
  }
`;