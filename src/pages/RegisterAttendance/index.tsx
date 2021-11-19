import { Btns, Container, Form, Selector } from './styled'
import Input from 'components/atomic/TextField/Outlined'
import React from 'react'
import { Universal } from 'src/components/atomic/ButtonUniversal'
import Admin from 'assets/icons/admin2.svg'
import { useHistory } from 'react-router-dom'
import { Switch } from '@material-ui/core'
import ButtonForm from 'src/components/atomic/ButtonForm'

const RegisterAtt = () => {
  const [phone, setPhone] = React.useState('')
  const history = useHistory()
  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  return (
    <Container>
      <div style={{ textAlign: 'center', margin: '15px' }}>
        <h3 style={{ fontWeight: 500 }}>Cadastro de Atendente</h3>
      </div>
      <Form noValidate autoComplete="off">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Input label="Email" variant="outlined" color="primary" required />

        <Input
          label="Senha"
          variant="outlined"
          color="primary"
          required
          type="password"
        />
        <Input
          label="Whatsapp"
          required
          maxLength={15}
          value={phone}
          onChange={setPhone}
          type="text"
          mask="phone"
        />
        <Selector>
          <h3>Atendente é Administrador ?</h3>
          <Switch {...label} size="medium" color="primary" />
        </Selector>
        <Selector>
          <h3>Atendente será Ativo? </h3>
          <Switch {...label} size="medium" color="primary" />
        </Selector>
        <Btns>
          <ButtonForm title="Cancelar" onClick={() => goTo('admin')} />
          <ButtonForm title="Enviar" />
        </Btns>
      </Form>
      <Universal
        img={Admin}
        onClick={() => goTo('admin')}
        title="Atendimento"
      />
    </Container>
  )
}
export default RegisterAtt
