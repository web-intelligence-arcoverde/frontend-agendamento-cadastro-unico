import { COLORS } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
  
  button {
    padding: 10px;
    border-radius: 100%;
    border:none;
    background-color: ${COLORS.secondGreen};
    position: fixed;
    right: 5%;
    bottom: 3%;
  }
  
  img {
    width: 30px;
  }
`;
