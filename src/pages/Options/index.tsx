import React from 'react'
import Social from 'src/components/atomic/ass-social'
import { Container } from './styled'
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
      <Prefeitura />
      <Card onClick={handleAttendance} title="Atendimento" />
      <Card onClick={handleRegistre} title="Cadastro Novo" />
      <Social />
      <ButtonBack onClick={handleHome} />
    </Container>
  )
}

export default Options
