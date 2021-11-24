import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #d8d8d8;

  h2,
  h3 {
    margin-bottom: 18px;
  }
`

export const CircleAvatar = styled.div`
  background-color: ${COLORS.secondGreen};
  border-radius: 100%;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`
