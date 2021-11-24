import { useHistory } from 'react-router-dom'
import Input from 'components/atomic/TextField/Outlined'
import Button from 'components/atomic/Button'

import { Container, Form } from './styled'
import Logo from 'assets/image/logo2.png'
import Universal from 'src/components/atomic/SpeedDialButton'
import CalendarBack from 'assets/icons/calendarback.svg'

import { signInRequest } from 'src/store/sagas/auth'
import { useDispatch } from 'react-redux'

const Login = () => {
  const history = useHistory()

  const dispatch = useDispatch()

  const signIn = e => {
    e.preventDefault()
    console.log('teste')
    //dispatch(signInRequest())
  }

  return (
    <Container>
      <img src={Logo} width="40%" />
      <div style={{ marginTop: '22px' }} />
      <h1>Acesso Exclusivo</h1>
      <Form noValidate autoComplete="off" onSubmit={signIn}>
        <div style={{ marginTop: '22px' }} />
        <Input
          label="Email"
          variant="outlined"
          color="primary"
          required
          type="text"
        />
        <div style={{ marginTop: '22px' }} />
        <Input
          label="Senha"
          variant="outlined"
          color="primary"
          required
          type="password"
        />
        <div style={{ marginTop: '22px' }} />
        <Button label="Entrar" />
      </Form>
      <Universal img={CalendarBack} />
    </Container>
  )
}

export default Login
