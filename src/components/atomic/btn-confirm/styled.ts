import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
   width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  button {
    width: 90%;
    height: 40px;
    border-radius: 12px;
    border: none;
    color: ${COLORS.primaryWhite};
    background:${COLORS.secondGreen};
    font-size: 15px;
    font-weight: bold;
  }
  img {
    width: 18px;
    
  }
`;
