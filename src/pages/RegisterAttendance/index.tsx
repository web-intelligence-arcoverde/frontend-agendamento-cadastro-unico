import { Btns, Container, Form, Selector } from './styled'
import Input from 'components/atomic/TextField/Outlined'
import React from 'react'

import { useHistory } from 'react-router-dom'
import Button from 'src/components/atomic/Button'
import Checkbox from 'components/atomic/Checkbox/'

const RegisterAtt = () => {
  const [phone, setPhone] = React.useState('')
  const history = useHistory()
  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontWeight: 500 }}>Cadastro de Atendente</h2>
      </div>

      <div style={{ marginTop: '18px' }} />

      <Form noValidate autoComplete="off">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <div style={{ marginTop: '18px' }} />
        <Input label="Email" variant="outlined" color="primary" required />
        <div style={{ marginTop: '18px' }} />
        <Input
          label="Senha"
          variant="outlined"
          color="primary"
          required
          type="password"
        />

        <div style={{ marginTop: '18px' }} />
        <Input
          label="Whatsapp"
          required
          maxLength={15}
          value={phone}
          onChange={setPhone}
          type="text"
          mask="phone"
        />
        <div style={{ marginTop: '18px' }} />
        <Selector>
          <h3>Atendente é Administrador?</h3>
          <Checkbox />
        </Selector>
        <div style={{ marginTop: '18px' }} />
        <Selector>
          <h3>Atendente será Ativo? </h3>
          <Checkbox />
        </Selector>
        <div style={{ marginTop: '18px' }} />
        <Btns>
          <Button label="Cancelar" onClick={() => goTo('admin')} />
          <div style={{ marginTop: '18px' }} />
          <Button label="Enviar" />
        </Btns>
      </Form>
    </Container>
  )
}
export default RegisterAtt
