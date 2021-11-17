import React from 'react'
import { Button } from '@material-ui/core'
import Input from 'components/atomic/TextField/Outlined'
import Select from 'components/atomic/TextField/Select'
import { useSelector } from 'react-redux'
import { Container, ContainerButtons } from './styled'

const currencies = [
  {
    value: '1',
    label: 'Cadastro',
  },
  {
    value: '2',
    label: 'Atualização',
  },
  {
    value: '3',
    label: 'Requisição',
  },
  {
    value: '4',
    label: 'Outros',
  },
]

const Form = () => {
  const [currency, setCurrency] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }

  const [cpf, setCpf] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const teste = useSelector(state => state)
  console.log(teste)

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
          height: '80%',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <h1>Agendar</h1>
        </div>
        <Select
          label="Tipo de Atendimento?"
          value={currency}
          onChange={handleChange}
          options={currencies}
        />

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
            color="secondary"
            variant="contained"
            disableElevation
            style={{ marginBottom: '10px' }}
          >
            Cancelar
          </Button>
          <Button color="primary" variant="contained" disableElevation>
            Enviar
          </Button>
        </ContainerButtons>
      </form>
    </Container>
  )
}

export default Form
