import React from 'react'
import ButtonBack from 'src/components/atomic/btn-back'
import Card from 'src/components/atomic/btn-option'
import Prefeitura from 'src/components/atomic/logo-prefeitura'

import { Att, Head, Dates, Container, Horas } from './styled'
import Calendar from 'src/components/atomic/api-calendar'
import { useHistory } from 'react-router-dom'
import Confirm from 'src/components/atomic/btn-confirm'

const Registre = () => {
  const history = useHistory()

  const handleOption = () => {
    history.push('options')
  }
  const handleForm = () => {
    history.push('formulario')
  }
  return (
    <Container>
      <Head>
        <h3>Agendamento Online</h3>
        <Prefeitura />
      </Head>
      <Att>
        <h3>Atendimento escolhido </h3>
        <Card
          title="Cadastro Novo"
          subtitle="Apenas para os horários de 9:00 horas"
        />
        <Dates>
          <h3>Selecione a data</h3>
          <Calendar />
        </Dates>
      </Att>
      <Horas>
        <h3>Hora selecionada</h3>
        <Card title="9:00 horas" />
      </Horas>

      <ButtonBack onClick={handleOption} />
      <Confirm onClick={handleForm} />
    </Container>
  )
}

export default Registre
