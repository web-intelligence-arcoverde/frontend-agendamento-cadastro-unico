import { Container } from './styled'
import CalendarBack from 'assets/icons/calendarback.svg'
import { Universal } from 'src/components/atomic/ButtonUniversal'
import { useHistory } from 'react-router-dom'
import ButtonSwitch from 'src/components/molecules/ButtonSwitch'

const AttendanceTypes = () => {
  const history = useHistory()
  const handleBack = () => {
    history.push('admin')
  }

  return (
    <Container>
      <h3>Tipos de Atendimentos </h3>

      <ButtonSwitch title="Cadastro" />
      <ButtonSwitch title="Atualização" />
      <ButtonSwitch title="Requisição" />
      <ButtonSwitch title="Outros" />
      <Universal img={CalendarBack} onClick={handleBack} />
    </Container>
  )
}

export default AttendanceTypes
