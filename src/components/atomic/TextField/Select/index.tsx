import React from 'react'
import { TextField, MenuItem, withStyles } from '@material-ui/core'

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

const Index = ({ options, value, onChange }: any) => {
  return (
    <CssTextField
      id="outlined-select-currency"
      select
      label="Tipo de Atendimento?"
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      InputLabelProps={{ shrink: true }}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </CssTextField>
  )
}

export default Index
