import { Switch, createTheme, ThemeProvider, colors } from '@material-ui/core'
import { Container } from './styled'
import { COLORS } from 'src/constants'

const theme = createTheme({
  palette: {
    primary: {
      main: `${COLORS.ForGreen}`,
    },
  },
})

const BtnSwitch = ({ defaultChecked }: any) => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Switch color="primary" />
      </ThemeProvider>
    </Container>
  )
}

export default BtnSwitch
