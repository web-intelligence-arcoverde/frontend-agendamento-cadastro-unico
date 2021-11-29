import React from 'react'
import { Checkbox } from '@material-ui/core'
import { Card, Container } from '../atomic/Attendants/styled'
import apiHours from 'constants/hours'

const NineHours = () => {
  const days = apiHours.map(day => {
    return (
      <Card>
        <Checkbox color="secondary" />
        {day.hours}
      </Card>
    )
  })
  return (
    <Container>
      <h2>Hora do Cadastro Novo</h2>
      <p>{days}</p>
    </Container>
  )
}

export default NineHours
