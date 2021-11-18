import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1{
    margin: 25px;
    color:${COLORS.primaryOrange};
    text-transform: uppercase;
    
  }
`;

export const StyleForm = styled.form `
width: 80%;



  .MuiInputBase-root {
     margin-bottom: 10px;
  }

`