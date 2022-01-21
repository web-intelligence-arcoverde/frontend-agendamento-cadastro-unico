import { useHistory } from 'react-router-dom'

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg'

import SpeedDialButton from 'src/components/atomic/SpeedDialButton'
import { TitleCard } from 'components/atomic/Typography'
import Card from 'src/components/atomic/CardButton'

import Social from 'src/components/molecules/SocialAssistanceLogo'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import { Header, Container } from './style'

const Options = () => {
  const history = useHistory()

  const goTo = ( go ): any => {
    history.push( `/${go}` )
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
        <Card onClick={() => goTo( 'options-atendimento' )} title="Atendimento" />
      </div>
      <Card onClick={() => goTo( 'novo-cadastro' )} title="Cadastro Novo" />


      <Social />
    </Container>
  )
}

export default Options
