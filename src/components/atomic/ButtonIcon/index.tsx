import { Container } from './styled'
import Img from 'assets/icons/calendar.svg'

const ButtonIcon = ({ onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        Avançar
      </button>
    </Container>
  )
}

export default ButtonIcon
