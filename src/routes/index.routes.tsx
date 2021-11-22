import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from 'src/pages/Home'
import ScheulingTypes from 'src/pages/ScheulingTypes'
import Form from 'src/pages/FormCadastro'
import Attendance from 'src/pages/Attendance'
import Registre from 'src/pages/New-registre'
import Admin from 'pages/Admin'
import Login from 'pages/Login'
import RegisterAtt from 'src/pages/RegisterAttendance'
import AttendanceTypes from 'src/pages/AttendanceTypes'
import ScheduledUsers from 'src/pages/ScheduledUsers'
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
        <Route path="/scheuling-types" component={ScheulingTypes} />
        <Route path="/admin" component={Admin} />
        <Route path="/atendimento" component={Attendance} />
        <Route path="/types-attendance" component={AttendanceTypes} />
        <Route path="/scheuling-users" component={ScheduledUsers} />
        <Route path="/login" component={Login} />
        <Route path="/register-attendance" component={RegisterAtt} />
        <Route path="/formulario" component={Form} />
        <Route path="/novo-cadastro" component={Registre} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
