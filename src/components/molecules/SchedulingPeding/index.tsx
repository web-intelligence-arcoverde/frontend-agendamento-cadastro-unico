import { Container } from './styled'

const Scheduling = ({ title, subtitle, number }: any) => {
  return (
    <Container>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{number}</p>
    </Container>
  )
}

export default Scheduling
