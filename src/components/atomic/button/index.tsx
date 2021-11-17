import React from 'react'
import { Container } from 'src/pages/Home/styled'
import { Btn } from './styled'

function Button({ onClick }: any) {
  return (
    <Container>
      <Btn type="submit" onClick={onClick}>
        CLIQUE AQUI PARA ENTRAR
      </Btn>
    </Container>
  )
}

export default Button
