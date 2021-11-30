import Perfil from 'src/components/molecules/Perfil'

import Button from 'src/components/atomic/Button'
import { Settings } from '@material-ui/icons'

import ButtonGroupActions from './Components/ButtonGroupActions'
import AppointmnetsPeding from './Components/AppointmentsPeding'

const Admin = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Perfil />

      <ButtonGroupActions />

      <AppointmnetsPeding />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '18px',
        }}
      >
        <h2>Agendamentos Concluídos</h2>
        <div style={{ marginTop: '18px' }} />
        <Button label="Abrir Configurações" img={<Settings />} />

        <div style={{ marginTop: '18px' }} />
      </div>
    </div>
  )
}

export default Admin
