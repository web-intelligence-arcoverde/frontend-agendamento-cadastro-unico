import React from 'react'
import { Checkbox } from '@material-ui/core'
import { Card, Container } from '../Attendants/styled'
import dates from 'src/constants/calendar'

const Week = [
  {
    id: 'Segunda-feira',
  },
  {
    id: 'Terça-feira',
  },
  {
    id: 'Quarta-feira',
  },
  {
    id: 'Quinta-feira',
  },
  {
    id: 'Sexta-feira',
  },
]

const Day = () => {
  const days = Week.map(day => {
    return (
      <Card>
        <Checkbox defaultChecked color="secondary" />
        {day.id}
      </Card>
    )
  })
  return (
    <Container>
      <h2>Editar Dias</h2>
      <p>{days}</p>
    </Container>
  )
}

export default Day
