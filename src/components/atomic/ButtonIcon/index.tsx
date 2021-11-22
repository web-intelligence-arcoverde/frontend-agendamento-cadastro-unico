import { Container } from './styled'
import Img from 'assets/icons/calendar.svg'

const ButtonIcon = ({ onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        <img src={Img} />
        Confirmar Agendamento
      </button>
    </Container>
  )
}

export default ButtonIcon
