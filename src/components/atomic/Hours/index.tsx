import React from 'react'
import { Checkbox } from '@material-ui/core'
import { Card, Container } from '../Attendants/styled'
import apiHours from 'constants/hours'

const Hours = () => {
  const days = apiHours.map(day => {
    return (
      <Card>
        <Checkbox defaultChecked color="secondary" />
        {day.hours}
      </Card>
    )
  })
  return (
    <Container>
      <h2>Editar Horas</h2>
      <p>{days}</p>
    </Container>
  )
}

export default Hours
