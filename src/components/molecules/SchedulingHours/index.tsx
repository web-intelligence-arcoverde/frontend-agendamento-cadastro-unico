import React, { useState } from 'react'

import { Container, CardHours } from './styled'
import CardComponent from 'src/components/atomic/CardButton'
import { apiHours } from 'src/constants/hours'

const Hours = () => {
  const [visibleCard, setVisibleCard] = useState(false)

  const handleDate = () => {
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
          {apiHours.map(({ hours }) => (
            <CardHours type="submit" onClick={() => handleDate()}>
              <h2>{hours}</h2>
            </CardHours>
          ))}
        </div>
      )}
      {visibleCard && <CardComponent onClick={handleRefresh} title="12:00" />}
    </Container>
  )
}

export default Hours
