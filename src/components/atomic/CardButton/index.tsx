import { Container } from './style'

const Card = ({ title, subtitle, onClick }: any) => {
  return (
    <Container onClick={onClick}>
      {title}
      <p>{subtitle}</p>
    </Container>
  )
}

export default Card
