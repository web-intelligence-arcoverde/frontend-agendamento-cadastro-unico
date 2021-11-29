import Universal from 'src/components/atomic/Button'
import Perfil from 'src/components/molecules/Perfil'
import { MiniContainer, Card, Peding, Config } from './styled'
import Logout from 'assets/icons/logout.svg'
import { useHistory } from 'react-router-dom'
import ButtonAdm from 'src/components/atomic/ButtonAdm'
import { useState } from 'react'
import {
  Storage,
  PersonAdd,
  InsertInvitation,
  Settings,
} from '@material-ui/icons'
import Scheduling from 'src/components/molecules/SchedulingPeding'
import MenuConfig from 'src/components/molecules/MenuConfig'

const Admin = () => {
  const history = useHistory()
  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }
  const [optionComponent, setOptionComponent] = useState('default')
  const Components = {
    default: <div />,
    menu: <MenuConfig />,
  }
  return (
    <>
      <MiniContainer>
        <div>
          <h3>Administração</h3>
        </div>
        <Perfil />

        <ButtonAdm
          title="Usuários  Agendados"
          img={<Storage />}
          onClick={() => goTo('usuarios-agendandos')}
        />
        <ButtonAdm
          title="Cadastrar  Atendente"
          img={<PersonAdd />}
          onClick={() => goTo('cadastrar-atendente')}
        />
        <ButtonAdm
          title="Tipos de Atendimentos"
          img={<InsertInvitation />}
          onClick={() => goTo('tipos-atendimentos')}
        />

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
      <Config style={{ marginBottom: '20px' }}>
        <h2>Agendamentos Concluídos</h2>
        <ButtonAdm
          title="Abrir Configurações"
          img={<Settings />}
          onClick={() => setOptionComponent('menu')}
        />
      </Config>
      {Components[optionComponent]}
    </>
  )
}

export default Admin