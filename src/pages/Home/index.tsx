import { Container, Divider } from './style'

import Button from 'src/components/atomic/Button'
import { Title } from 'src/components/atomic/Typography'

import Social from 'src/components/molecules/SocialAssistanceLogo'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const handleOptions = () => {
    history.push('/tipos-agendamentos')
  }

  return (
    <Container>
      <PrefectureLogo />

      <div
        style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
      >
        <Title>Sistema de agendamento online</Title>

        <Divider />

        <Button onClick={handleOptions} label={'CLIQUE AQUI PARA ENTRAR'} />
      </div>

      <Social />
    </Container>
  )
}

export default Home
