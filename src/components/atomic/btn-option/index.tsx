import React from 'react'
import { Click, Container } from './styled'

const Card = ({ title, subtitle, onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        {title}
        <p>{subtitle}</p>
      </button>
    </Container>
  )
}

export default Card
