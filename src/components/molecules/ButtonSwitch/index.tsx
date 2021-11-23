import React from 'react'
import BtnSwitch from 'src/components/atomic/BtnSwitch'
import { Container, Selector } from './styled'

// import { Container } from './styles';

const ButtonSwitch = ({ title }: any) => {
  return (
    <Container>
      <Selector>
        <h4>{title}</h4>
        <BtnSwitch />
      </Selector>
    </Container>
  )
}

export default ButtonSwitch
