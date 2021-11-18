import { useHistory } from 'react-router-dom'
import Arrow from 'assets/icons/password.svg'

import { TitleCard } from 'components/atomic/Typography'
import Card from 'src/components/atomic/CardButton'

import Social from 'src/components/molecules/SocialAssistanceLogo'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import { Header, Container } from './style'
import { Universal } from 'src/components/atomic/ButtonUniversal'

const Options = () => {
  const history = useHistory()

  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }
  return (
    <Container>
      <Header>
        <PrefectureLogo />
      </Header>
      <div style={{ width: '100%' }}>
        <TitleCard style={{ marginBottom: '10px' }}>
          Escolha o atendimento
        </TitleCard>

        <Card onClick={() => goTo('atendimento')} title="Atendimento" />
      </div>
      <div style={{ margin: '10px', width: '100%' }}>
        <Card onClick={() => goTo('novo-cadastro')} title="Cadastro Novo" />
      </div>

      <Social />
      <Universal onClick={() => goTo('login')} img={Arrow} />
    </Container>
  )
}

export default Options
