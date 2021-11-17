import { TextField, withStyles } from '@material-ui/core'
import { validatorCpf } from 'util/validators/cpf'
import { maskCpf } from 'util/masks/cpf'
import { maskPhone } from 'src/util/masks/phone'

const TextInput = withStyles({
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

const CustomTextInput = ({
  label,
  value,
  onChange,
  maxLength,
  mask,
  type,
  required,
}: any) => {
  const errorValidatorCpf = mask === 'cpf' && validatorCpf(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (mask === 'cpf') {
      onChange(maskCpf(event.target.value, value))
    } else if (mask === 'phone') {
      onChange(maskPhone(event.target.value))
    }
  }

  return (
    <TextInput
      label={label}
      variant="outlined"
      color="primary"
      fullWidth
      type={type}
      required={required}
      onChange={handleChange}
      value={value}
      inputProps={{
        maxLength,
      }}
      InputLabelProps={{ shrink: true }}
      error={mask === 'cpf' && !errorValidatorCpf}
      id="standard-error-helper-text"
      helperText={
        mask === 'cpf' && (errorValidatorCpf ? '' : 'Informe um cpf.')
      }
    />
  )
}

export default CustomTextInput
