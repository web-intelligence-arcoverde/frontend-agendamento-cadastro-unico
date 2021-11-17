import styled from 'styled-components';
import { COLORS } from 'src/constants';
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  justify-content: space-around;
  height: 100vh;
  
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
  
  }
`;

export const ContainerButton = styled.div`
  width: 90%;
`
