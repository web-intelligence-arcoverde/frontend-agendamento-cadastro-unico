import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
 
`;
export const Title=styled.div`
color: #747678;
margin-left:4%;
margin-bottom: 10px;
h4 {
  font-weight: 500;
}
`
export const Menu =styled.div`
display: flex;
justify-content: center;
display: flex;
flex-wrap: wrap;



button {
  width: 18.5%;
  height: 35px;
  font-size: 16px;
  border-radius: 7px;
  border:none;
  margin-left: 2px;
  
  
  
  
  :hover{
    color:${COLORS.ForGreen} ;
    background-color: ${COLORS.primaryWhite};
    box-shadow: 1px 1px 1px 1px gray;
    
  }
  :focus{
       color:${COLORS.ForGreen} ;
    background-color: ${COLORS.primaryWhite};
      box-shadow:  1px 1px 1px 1px gray;
  }
  
  
}
`
