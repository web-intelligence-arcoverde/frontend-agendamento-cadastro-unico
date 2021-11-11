import React from 'react'
import Img from 'assets/icons/arrow.svg'
import { Container } from './styled'

const ButtonBack = ({ onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        <img src={Img} />
      </button>
    </Container>
  )
}

export default ButtonBack
