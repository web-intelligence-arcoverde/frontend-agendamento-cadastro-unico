import React from 'react'
import { Container } from './styled'
import Img from 'assets/icons/calendar.svg'

const Confirm = ({ onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        <img src={Img} />
        Confirmar Agendamento
      </button>
    </Container>
  )
}

export default Confirm
