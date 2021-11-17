import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'src/pages/Home'
import Options from 'src/pages/Options'
import Form from 'src/pages/FormCadastro'

const Example = lazy(() =>
  import('src/pages/Example/Example').then(module => ({
    default: module.Example,
  })),
)
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
        <Route path="/formulario" component={Form} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
