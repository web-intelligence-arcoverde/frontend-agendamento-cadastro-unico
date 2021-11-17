import { Container, ContainerButton } from './style'

import Button from 'src/components/atomic/Button'
import { Title } from 'src/components/atomic/Typography'

import Social from 'src/components/molecules/SocialAssistanceLogo'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('/scheuling-types')
  }
  return (
    <Container>
      <PrefectureLogo />

      <Title>Sistema de Agendamento Online</Title>

      <ContainerButton>
        <Button onClick={handleOptions} label={'CLIQUE AQUI PARA ENTRAR'} />
      </ContainerButton>
      <Social />
    </Container>
  )
}

export default Home
