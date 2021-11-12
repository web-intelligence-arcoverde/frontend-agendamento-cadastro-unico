import React from 'react'
import { Container } from './styled'
import Img from 'assets/icons/calendar.svg'

const Confirm = () => {
  return (
    <Container>
      <button>
        {' '}
        <img src={Img} />
        Confirmar Agendamento
      </button>
    </Container>
  )
}

export default Confirm
