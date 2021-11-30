import React from 'react'
import { Container, Card } from './styled'

const Users = ({ Type, Cpf, Hours }: any) => {
  return (
    <Container>
      <Card>
        <h4 style={{ fontWeight: 600, color: 'black', marginBottom: '6px' }}>
          {Type}
        </h4>
        <h4>
          CPF: {Cpf} - <span>{Hours}</span>
        </h4>
      </Card>
    </Container>
  )
}

export default Users
