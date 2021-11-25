import React from 'react'
import Clerk from 'constants/clerk'
import { Card, Container } from './styled'

import { Checkbox } from '@material-ui/core'

const Clerks = () => {
  const list = Clerk.map(atendente => {
    return (
      <Card>
        <Checkbox defaultChecked color="secondary" />
        {atendente.id}
      </Card>
    )
  })
  return (
    <Container>
      <h2> Atendentes </h2>
      <div>
        <p>{list}</p>
      </div>
    </Container>
  )
}

export default Clerks
