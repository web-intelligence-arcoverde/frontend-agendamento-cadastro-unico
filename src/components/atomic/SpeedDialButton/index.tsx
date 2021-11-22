import { Container } from './styled'

const SpeedDialButton = ({ img, onClick }: any) => {
  return (
    <Container>
      <button onClick={onClick}>
        <img src={img} />
      </button>
    </Container>
  )
}


export default SpeedDialButton