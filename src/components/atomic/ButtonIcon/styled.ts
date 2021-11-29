import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  button {
    width: 70%;
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
    margin-bottom: 20px;
  }
  img {
    width: 20px;
    margin-right: 5px;
    
    
    
  }
`;
