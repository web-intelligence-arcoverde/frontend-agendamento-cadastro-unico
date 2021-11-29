import React from 'react'
import { Button } from '@material-ui/core'
import Input from 'components/atomic/TextField/Outlined'
import { useSelector } from 'react-redux'
import { Container, ContainerButtons } from './styled'
import { useHistory } from 'react-router-dom'

const Form = () => {
  const [cpf, setCpf] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const teste = useSelector(state => state)
  const history = useHistory()
  const handleCancel = () => {
    history.push('atendimento')
  }

  return (
    <Container>
      <form
        noValidate
        autoComplete="off"
        style={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <h1>Agendar</h1>
        </div>

        <Input
          label="Nome Completo"
          variant="outlined"
          color="primary"
          required
        />
        <Input
          label="Informe seu CPF"
          required
          maxLength={14}
          value={cpf}
          onChange={setCpf}
          type="text"
          mask="cpf"
        />

        <Input
          label="Informe seu telefone"
          required
          maxLength={15}
          value={phone}
          onChange={setPhone}
          type="text"
          mask="phone"
        />

        <Input
          label="Observações"
          variant="outlined"
          color="primary"
          multiline
          rows={6}
        />

        <ContainerButtons>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            style={{ marginBottom: '20px', backgroundColor: 'green' }}
          >
            Enviar
          </Button>
          <Button color="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </ContainerButtons>
      </form>
    </Container>
  )
}

export default Form
