import { useHistory } from 'react-router-dom'
import  ArrowIcon from 'assets/icons/password.svg'

import { TitleCard } from 'components/atomic/Typography'
import Card from 'src/components/atomic/CardButton'

import Social from 'src/components/molecules/SocialAssistanceLogo'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import {  Container } from './style'
import SpeedDialButton from 'src/components/atomic/SpeedDialButton'

import { Divider } from '../Home/style'

const Options = () => {
  const history = useHistory()

  const goTo = (go: string): any => {
    history.push(`/${go}`)
  }
  return (
    <Container>
      <PrefectureLogo />
      
      <div style={{ width: '100%' }}>
      
        <TitleCard style={{ marginBottom: '10px' }}>
          Escolha o atendimento
        </TitleCard>

        <Card onClick={() => goTo('atendimento')} title="Atualização de cadastro" />
        <Divider />
        <Card onClick={() => goTo('novo-cadastro')} title="Cadastro Novo/Transferência" />
      
      </div>

      <Social />

      <SpeedDialButton onClick={() => goTo('login')} img={ArrowIcon} />
  
    </Container>
  )
}

export default Options
