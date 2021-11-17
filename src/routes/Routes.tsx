import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'src/pages/Home'
import Options from 'src/pages/Options'
import Form from 'src/pages/FormCadastro'
import Attendance from 'src/pages/Attendance'
import Registre from 'src/pages/New-registre'

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/options" component={Options} />
        <Route path="/options-atendimento" component={Attendance} />
        <Route path="/formulario" component={Form} />
        <Route path="/novo-cadastro" component={Registre} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
