import { Container } from './styled'

export const Universal = ({ img, onClick }: any) => {
  return (
    <Container>
      <button type="submit" onClick={onClick}>
        <img src={img} />
      </button>
    </Container>
  )
}
