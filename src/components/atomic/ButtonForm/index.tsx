import React from 'react'
import { Container } from './styled'

const ButtonForm = ({ title, onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    </Container>
  )
}

export default ButtonForm
