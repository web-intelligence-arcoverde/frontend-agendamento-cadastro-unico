import Card from 'src/components/atomic/CardButton'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import { Container } from './styled'
import { useHistory } from 'react-router-dom'
import Calendar from 'src/components/molecules/SchedulingCalendar'
import Hours from 'src/components/molecules/SchedulingHours'
import ButtonIcon from 'src/components/atomic/ButtonIcon'

const Attendance = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('scheuling-types')
  }

  const handleConfirm = () => {
    history.push('formulario')
  }

  return (
    <Container>
      <PrefectureLogo />

      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          marginTop: '20px',
        }}
      >
        <h4>Atendimento escolhido</h4>
        <div style={{ marginTop: '10px' }} />
        <Card
          title="Atendimento"
          subtitle="Todos os horários não agendados"
          onClick={handleOptions}
        />
      </div>

      <div style={{ marginTop: '20px' }} />
      <Calendar />

      <div style={{ marginTop: '20px' }} />
      <Hours />

      <ButtonIcon onClick={handleConfirm} />
      <div style={{ width: '100%', height: '20px', color: '#fff' }}>
        Web Intelligence
      </div>
    </Container>
  )
}

export default Attendance
