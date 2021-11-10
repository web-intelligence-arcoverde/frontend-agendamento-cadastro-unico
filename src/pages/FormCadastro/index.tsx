import React from 'react'
import {
  TextField,
  MenuItem,
  makeStyles,
  withStyles,
  Button,
} from '@material-ui/core'
import { Container, Btns } from './styled'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(2,99,44,0.7)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(2,99,44,0.7)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(2,99,44,0.7)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(2,99,44,0.7)',
      },
    },
  },
})(TextField)

const useStyles = makeStyles({
  field: {
    marginTop: 15,
  },
})

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
  const classes = useStyles()
  return (
    <Container>
      <h2>Agendar</h2>
      <form noValidate autoComplete="off">
        <CssTextField
          className={classes.field}
          id="outlined-select-currency"
          select
          label="Tipo de Atendimento?"
          value={currency}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CssTextField>

        <CssTextField
          className={classes.field}
          label="Nome Completo"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <CssTextField
          className={classes.field}
          label="Informe seu CPF"
          variant="outlined"
          color="primary"
          fullWidth
          required
          inputProps={{
            inputMode: 'decimal',
            pattern: '[0-9]*',
            maxLength: 11,
          }}
          type="text"
        />

        <CssTextField
          className={classes.field}
          label="DDD+Telefone"
          placeholder="Ex.:87987778609"
          variant="outlined"
          color="primary"
          fullWidth
          inputProps={{
            inputMode: 'decimal',
            pattern: '[0-9]*',
            maxLength: 11,
          }}
          type="text"
        />
        <CssTextField
          className={classes.field}
          label="Observações"
          variant="outlined"
          color="primary"
          fullWidth
          multiline
          rows={6}
        />
      </form>
      <Btns>
        <Button color="secondary">Cancelar</Button>
        <Button color="primary">Enviar</Button>
      </Btns>
    </Container>
  )
}

export default Form
