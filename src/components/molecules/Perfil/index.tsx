import Admin from 'assets/icons/admin.svg'
import { CircleAvatar, Container } from './styled'

const Perfil = () => {
  const imgLink = Admin
  const userName = 'Atendente 6'

  return (
    <Container>
      <h2>Dashboard</h2>
      <CircleAvatar>
        <img src={imgLink} />
      </CircleAvatar>
      <h3>{userName}</h3>
    </Container>
  )
}
export default Perfil
