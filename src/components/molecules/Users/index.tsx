import React from 'react'
import { Container, Card } from './styled'

// import { Container } from './styles';

const Users = ({ Type, Cpf, Hours }: any) => {
  return (
    <Container>
      <Card>
        <h4 style={{ fontWeight: 600, color: 'black' }}>{Type}</h4>
        <h4>
          CPF: {Cpf} - <span>{Hours}</span>
        </h4>
      </Card>
    </Container>
  )
}

export default Users
