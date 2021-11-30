import Users from 'src/components/molecules/Users'

import { Container } from './styled'

import moment from 'moment'

const ScheduledUsers = () => {
  const getDate = () => {
    moment.locale('pt')
    var dia = moment().format('dddd')
    var extenso = moment().format('DD [de] MMMM [de] YYYY')
    return `${dia}, ${extenso}`
  }

  return (
    <Container>
      <h2>Usuários Agendados</h2>
      <div style={{ marginTop: '18px' }} />
      <p>{getDate()}</p>
      <div style={{ marginTop: '18px' }} />
      <Users Type="Cadastro Novo" Cpf="05518813395" Hours="Hora:09:00" />
      <div style={{ marginTop: '18px' }} />
      <Users Type="Atendimento" Cpf="05510926395" Hours="Hora:10:00" />
      <div style={{ marginTop: '18px' }} />
      <Users Type="Cadastro Novo" Cpf="05518813395" Hours="Hora:09:00" />
    </Container>
  )
}

export default ScheduledUsers
