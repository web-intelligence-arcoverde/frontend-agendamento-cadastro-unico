import { Switch, createTheme, ThemeProvider, colors } from '@material-ui/core'
import { Container } from './styled'
import { COLORS } from 'src/constants'
import { Checkbox } from '@material-ui/core'
const theme = createTheme({
  palette: {
    primary: {
      main: `${COLORS.ForGreen}`,
    },
  },
})

const BtnSwitch = ({ defaultChecked }: any) => {
  return <Checkbox />
}

export default BtnSwitch
