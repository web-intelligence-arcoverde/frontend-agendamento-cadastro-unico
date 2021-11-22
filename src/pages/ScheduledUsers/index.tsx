import React from 'react'
import Users from 'src/components/molecules/Users'
import CalendarBack from 'assets/icons/calendarback.svg'
import { Container } from './styled'
import { Universal } from 'src/components/atomic/ButtonUniversal'
import { useHistory } from 'react-router-dom'

const ScheduledUsers = () => {
  const history = useHistory()
  const handleBack = () => {
    history.push('admin')
  }
  return (
    <Container>
      <h3>Usuários Agendados </h3>
      <p>TERÇA-FEIRA,31 DE AGOSTO DE 2021</p>
      <Users Type="Cadastro Novo" Cpf="05518813395" Hours="Hora:09:00" />
      <Users Type="Atendimento" Cpf="05510926395" Hours="Hora:10:00" />
      <Users Type="Cadastro Novo" Cpf="05518813395" Hours="Hora:09:00" />
      <Universal img={CalendarBack} onClick={handleBack} />
    </Container>
  )
}

export default ScheduledUsers
