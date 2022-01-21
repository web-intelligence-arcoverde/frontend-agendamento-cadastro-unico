import Card from 'src/components/atomic/CardButton'
import PrefectureLogo from 'components/molecules/PrefectureLogo'
import { Att, Container, Dates, Head, Horas } from './styled'
import { useHistory } from 'react-router-dom'
import Calendar from 'src/components/molecules/SchedulingCalendar'
import Hours from 'src/components/molecules/SchedulingHours'
import Button from 'src/components/atomic/Button'

const Attendance = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('/tipos-agendamento')
  }
  const handleConfirm = () => {
    history.push('formulario')
  }

  return (
    <Container>
      <Head>
        <h3>Agendamento Online</h3>
        <PrefectureLogo />
      </Head>
      <Att>
        <h4>Atendimento escolhido</h4>
        <Card
          title="Atendimento"
          subtitle="Todos os horários não agendados"
          onClick={handleOptions}
        />
      </Att>

      <Dates>
        <h4>Selecione a data</h4>
        <Calendar />
      </Dates>

      <Horas>
        <h4>Selecione o Horario</h4>
        <Hours />
      </Horas>

      <div style={{ width: '90%' }}>
        <Button onClick={handleConfirm} label="Confirmar" />
      </div>
    </Container>
  )
}

export default Attendance
