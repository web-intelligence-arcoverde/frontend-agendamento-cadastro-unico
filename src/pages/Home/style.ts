import styled from 'styled-components';
import { COLORS } from 'src/constants';
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  
  :first-child{
    padding-top: 40px;
  }
  
  :last-child{
    padding-bottom: 40px;
  }
  h1 {
    color: ${COLORS.primaryOrange};
    font-size: 35px;
    text-align: center;
    margin-top: 30px;
    max-width: 15ch;
  }
`;

export const ContainerButton = styled.div`
  width: 90%;
`
