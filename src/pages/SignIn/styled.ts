import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  padding: 20px;

  h1 {
    color: ${COLORS.primaryOrange};
  }
`

export const Form = styled.form`
  width: 100%;
`
