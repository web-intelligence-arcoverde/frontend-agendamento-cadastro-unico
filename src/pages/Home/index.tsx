import React from 'react'

import { Container } from './styled'
import Button from 'components/atomic/button'
import Social from 'src/components/atomic/ass-social'
import { useHistory } from 'react-router-dom'
import Prefeitura from 'src/components/atomic/logo-prefeitura'

const Home = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('options')
  }
  return (
    <Container>
      <Prefeitura />

      <div>
        <h1>Sistema de Agendamento Online</h1>
      </div>
      <Button onClick={handleOptions} />
      <Social />
    </Container>
  )
}

export default Home
