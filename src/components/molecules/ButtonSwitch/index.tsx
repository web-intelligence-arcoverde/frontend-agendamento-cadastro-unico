import Checkbox from 'src/components/atomic/Checkbox'
import { Container, Selector } from './styled'

// import { Container } from './styles';

const ButtonSwitch = ({ title }: any) => {
  return (
    <Container>
      <Selector>
        <h4>{title}</h4>
        <Checkbox />
      </Selector>
    </Container>
  )
}

export default ButtonSwitch
