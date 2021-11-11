import React from 'react'
import { dates } from 'constants/calendar'
import { Card, Container } from './styled'

const Calendar = () => {
  return (
    <Container>
      {dates.map(({ data, day }) => (
        <Card type="submit">
          <h3>{data}</h3>
          <p>{day}</p>
        </Card>
      ))}
    </Container>
  )
}

export default Calendar
