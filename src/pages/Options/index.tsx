import React from 'react'
import Social from 'src/components/atomic/ass-social'
import { Container } from './styled'
import Prefeitura from 'src/components/atomic/logo-prefeitura'
import Card from 'src/components/atomic/btn-option'

// import { Container } from './styles';

const Options = () => {
  return (
    <Container>
      <Prefeitura />
      <Card title="Atendimento" />
      <Card title="Cadastro Novo" />
      <Social />
    </Container>
  )
}

export default Options
