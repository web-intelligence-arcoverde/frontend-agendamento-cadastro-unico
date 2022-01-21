import React, { useState } from 'react'
import { dates } from 'constants/calendar'
import { Card, Container } from './styled'
import CardComponent from 'src/components/atomic/CardButton'

const Calendar = () => {
  const [visibleCard, setVisibleCard] = useState(false)

  const handleDate = (data, day) => {
    console.log(day, data)
    setVisibleCard(true)
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <Container>
      {!visibleCard && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {dates.map(({ data, day }) => (
            <Card type="submit" onClick={() => handleDate(data, day)}>
              <h3>{data}</h3>
              <p>{day}</p>
            </Card>
          ))}
        </div>
      )}
      {visibleCard && (
        <CardComponent
          onClick={handleRefresh}
          title="12/11/2021"
          subtitle="segunda-feita"
        />
      )}
    </Container>
  )
}

export default Calendar
