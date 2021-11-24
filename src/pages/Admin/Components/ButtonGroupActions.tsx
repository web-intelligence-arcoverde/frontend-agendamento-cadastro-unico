import Button from 'src/components/atomic/Button'
import { useHistory } from 'react-router-dom'
import Logout from 'assets/icons/logout.svg'

import { Storage, PersonAdd, InsertInvitation } from '@material-ui/icons'

const Index = () => {
  const history = useHistory()

  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }

  return (
    <div style={{ borderBottom: '1px solid #d8d8d8' }}>
      <div style={{ marginTop: '18px' }} />

      <Button
        className="space-button"
        label="Usuários Agendados"
        img={<Storage />}
        onClick={() => goTo('scheuling-users')}
      />

      <div style={{ marginTop: '18px' }} />

      <Button
        label="Cadastrar Atendente"
        img={<PersonAdd />}
        onClick={() => goTo('register-attendance')}
      />

      <div style={{ marginTop: '18px' }} />

      <Button
        label="Tipos de Atendimentos"
        img={<InsertInvitation />}
        onClick={() => goTo('types-attendance')}
      />

      <div style={{ marginTop: '18px' }} />

      <Button img={Logout} onClick={() => goTo('login')} label="Atendimento" />

      <div style={{ marginBottom: '18px' }} />
    </div>
  )
}

export default Index
