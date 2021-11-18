import React from 'react'
import { Universal } from 'src/components/atomic/ButtonUniversal'
import Perfil from 'src/components/molecules/Perfil'
import { Container } from './styled'
import Logout from 'assets/icons/logout.svg'
import { useHistory } from 'react-router-dom'
import ButtonAdm from 'src/components/atomic/ButtonAdm'
import { Storage, PersonAdd, InsertInvitation } from '@material-ui/icons'

const Admin = () => {
  const history = useHistory()
  const handleLogout = () => {
    history.push('login')
  }

  return (
    <Container>
      <h3>Administração</h3>
      <Perfil />
      <Universal img={Logout} onClick={handleLogout} />
      <ButtonAdm title="Usuários  Agendados" img={<Storage />} />
      <ButtonAdm title="Cadastrar  Atendente" img={<PersonAdd />} />
      <ButtonAdm
        title="Tipos de Atendimentos"
        img={<InsertInvitation />}
        style={{ paddingLeft: '5px' }}
      />
    </Container>
  )
}

export default Admin
