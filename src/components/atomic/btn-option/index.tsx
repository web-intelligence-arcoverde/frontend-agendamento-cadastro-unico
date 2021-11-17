import React from 'react'
import { Click, Container } from './styled'

const Card = ({ title }: any) => {
  return (
    <Container>
      <button>{title}</button>
    </Container>
  )
}

export default Card
