import { COLORS } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
bottom: 8%;

button {
  padding: 10px;
  border-radius: 100%;
  border:none;
  background-color: ${COLORS.thirdGreen};
  position: fixed;
  right: 3%;
}
  
img {
  width: 20px;
}

`;
