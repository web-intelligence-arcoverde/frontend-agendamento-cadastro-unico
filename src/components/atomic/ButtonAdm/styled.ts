import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
  button {
    width: 90%;
    border-radius:10px;
    background-color: ${COLORS.secondGreen};
    color: ${COLORS.primaryWhite};
    text-transform: none;
    border: none;
    height: 45px;
    font-weight: bold;
    font-size: 16px;
    :hover{
      background-color:${COLORS.primaryOrange};
    }
  }
`;
