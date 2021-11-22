import { Container } from './styled'
import IconSocial from 'assets/image/img-social.png'

const Social = () => {
  return (
    <Container>
      <img src={IconSocial} width="35%" />
      <h2>
        Secretaria de <span>ASSISTÊNCIA SOCIAL</span>
      </h2>
    </Container>
  )
}

export default Social
