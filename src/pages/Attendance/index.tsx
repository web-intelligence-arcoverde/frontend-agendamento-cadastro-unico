import React from 'react'
import Card from 'src/components/atomic/btn-option'
import Prefeitura from 'src/components/atomic/logo-prefeitura'
import { Att, Container, Dates, Head } from './styled'
import { useHistory } from 'react-router-dom'
import ButtonBack from 'src/components/atomic/btn-back'
import Calendar from 'src/components/atomic/api-calendar'

const Attendance = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('options')
  }

  return (
    <Container>
      <Head>
        <h3>Agendamento Online</h3>
        <Prefeitura />
      </Head>
      <Att>
        <h3>Atendimento escolhido</h3>
        <Card
          title="Atendimento"
          subtitle="Todos os horários não agendados"
          onClick={handleOptions}
        />
      </Att>

      <Dates>
        <h3>Selecione a data</h3>

        <Calendar />
      </Dates>
      <ButtonBack onClick={handleOptions} />
    </Container>
  )
}

export default Attendance
