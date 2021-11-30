import { Container } from './styled'
import CalendarBack from 'assets/icons/calendarback.svg'
import Button from 'src/components/atomic/Button'
import { useHistory } from 'react-router-dom'
import ButtonSwitch from 'src/components/molecules/ButtonSwitch'

const AttendanceTypes = () => {
  const history = useHistory()
  const handleBack = () => {
    history.push('admin')
  }

  return (
    <Container>
      <h2>Tipos de Atendimentos </h2>
      <div style={{ marginTop: '18px' }} />
      <ButtonSwitch title="Cadastro" />
      <div style={{ marginTop: '18px' }} />
      <ButtonSwitch title="Atualização" />
      <div style={{ marginTop: '18px' }} />
      <ButtonSwitch title="Requisição" />
      <div style={{ marginTop: '18px' }} />
      <ButtonSwitch title="Outros" />
      <div style={{ marginTop: '18px' }} />
      <Button img={CalendarBack} onClick={handleBack} label="Voltar" />
      <div style={{ marginTop: '18px' }} />
      <Button img={CalendarBack} onClick={handleBack} label="Adicionar" />
    </Container>
  )
}

export default AttendanceTypes
