import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'src/pages/Home'
import ScheulingTypes from 'src/pages/ScheulingTypes'
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
        <Route path="/tipos-agendamento" component={ScheulingTypes} />
        <Route path="/opcoes-atendimento" component={Attendance} />
        <Route path="/formulario" component={Form} />
        <Route path="/novo-cadastro" component={Registre} />
        <Route path="/404" component={GenericNotFound} />
      </Switch>
    </Suspense>
  )
}
