import React from 'react'
import Card from 'src/components/atomic/btn-option'
import Prefeitura from 'src/components/atomic/logo-prefeitura'
import { Att, Container, Dates, Head, Horas } from './styled'
import { useHistory } from 'react-router-dom'
import ButtonBack from 'src/components/atomic/btn-back'
import Calendar from 'src/components/atomic/api-calendar'
import Hours from 'src/components/atomic/api-hours'
import Confirm from 'src/components/atomic/btn-confirm'

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
      <Horas>
        <h3>Selecione o Horario</h3>
        <Hours />
      </Horas>
      <ButtonBack onClick={handleOptions} />
      <Confirm />
    </Container>
  )
}

export default Attendance
