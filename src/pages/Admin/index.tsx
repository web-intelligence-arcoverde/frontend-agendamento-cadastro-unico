import React from 'react'
import { Universal } from 'src/components/atomic/ButtonUniversal'
import Perfil from 'src/components/molecules/Perfil'
import { MiniContainer, Card, Peding, Config } from './styled'
import Logout from 'assets/icons/logout.svg'
import { useHistory } from 'react-router-dom'
import ButtonAdm from 'src/components/atomic/ButtonAdm'
import {
  Storage,
  PersonAdd,
  InsertInvitation,
  Settings,
} from '@material-ui/icons'
import Scheduling from 'src/components/molecules/SchedulingPeding'

const Admin = () => {
  const history = useHistory()
  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }

  return (
    <>
      <MiniContainer>
        <div>
          <h3>Administração</h3>
        </div>
        <Perfil />
        <Universal
          img={Logout}
          onClick={() => goTo('login')}
          title="Atendimento"
        />
        <ButtonAdm title="Usuários  Agendados" img={<Storage />} />
        <ButtonAdm
          title="Cadastrar  Atendente"
          img={<PersonAdd />}
          onClick={() => goTo('register-attendance')}
        />
        <ButtonAdm title="Tipos de Atendimentos" img={<InsertInvitation />} />

        <Peding>
          <h2>Agendamentos Pendentes</h2>
        </Peding>
      </MiniContainer>
      <Card>
        <Scheduling
          title="JOELCIO"
          subtitle="Atendimento"
          number="87991417395"
        />
        <Scheduling
          title="Teste"
          subtitle="Cadastro Novo"
          number="87998427394"
        />
        <Scheduling
          title="Limpar usuário selecionado"
          subtitle="Atendimento"
          number="87991417395"
        />
        <Scheduling
          title="Junior"
          subtitle="Atendimento"
          number="87991417395"
        />
      </Card>
      <Config>
        <h2>Agendamentos Concluídos</h2>
        <ButtonAdm title="Abrir Configurações" img={<Settings />} />
      </Config>
    </>
  )
}

export default Admin
