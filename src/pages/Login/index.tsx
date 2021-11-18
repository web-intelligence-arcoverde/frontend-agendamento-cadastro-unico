import React from 'react'
import { useHistory } from 'react-router-dom'
import Input from 'components/atomic/TextField/Outlined'
import { Button } from '@material-ui/core'
import { Container, StyleForm } from './styled'
import Logo from 'assets/image/logo2.png'
import { LockOpen } from '@material-ui/icons'
import { Universal } from 'src/components/atomic/ButtonUniversal'
import CalendarBack from 'assets/icons/calendarback.svg'

const Login = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('/scheuling-types')
  }

  return (
    <Container>
      <img src={Logo} width="40%" />
      <h1>Acesso Exclusivo</h1>
      <StyleForm noValidate autoComplete="off">
        <Input
          label="Email"
          variant="outlined"
          color="primary"
          required
          type="text"
        />

        <Input
          label="Senha"
          variant="outlined"
          color="primary"
          required
          type="password"
        />
        <Button
          variant="outlined"
          fullWidth
          startIcon={<LockOpen />}
          style={{
            backgroundColor: '#38a533',
            color: '#fff',
            height: '55px',
          }}
        >
          Entrar
        </Button>
      </StyleForm>
      <Universal img={CalendarBack} onClick={handleOptions} />
    </Container>
  )
}

export default Login
