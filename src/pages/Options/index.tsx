import React from 'react'
import Social from 'src/components/atomic/ass-social'
import { Bottom, Container, Space, Topo } from './styled'
import Prefeitura from 'src/components/atomic/logo-prefeitura'
import Card from 'src/components/atomic/btn-option'
import { useHistory } from 'react-router-dom'
import ButtonBack from 'src/components/atomic/btn-back'

const Options = () => {
  const history = useHistory()
  const handleAttendance = () => {
    history.push('options-atendimento')
  }
  const handleHome = () => {
    history.push('/')
  }
  const handleRegistre = () => {
    history.push('novo-cadastro')
  }
  return (
    <Container>
      <Topo>
        <h3>Agendamento Online</h3>
        <Prefeitura />
      </Topo>
      <Space>
        <h4>Escolha o atendimento</h4>
        <Card onClick={handleAttendance} title="Atendimento" />
      </Space>
      <Space>
        <Card onClick={handleRegistre} title="Cadastro Novo" />
      </Space>
      <ButtonBack onClick={handleHome} />
      <Bottom>
        <Social />
      </Bottom>
    </Container>
  )
}

export default Options
