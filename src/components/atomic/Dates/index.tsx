import React from 'react'
import { Checkbox } from '@material-ui/core'
import { Card, Container } from '../Attendants/styled'
import dates from 'src/constants/calendar'

const Dates = () => {
  const data = dates.map(day => {
    return (
      <Card>
        <Checkbox defaultChecked color="secondary" />
        {day.data}
      </Card>
    )
  })
  return (
    <Container>
      <h2>Dia específico</h2>
      <p>{data}</p>
    </Container>
  )
}

export default Dates
