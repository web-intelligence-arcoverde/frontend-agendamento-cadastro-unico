import Img from 'assets/icons/arrow.svg'

import ButtonBack from 'src/components/atomic/SpeedDialButton'
import Card from 'src/components/atomic/CardButton'
import PrefectureLogo from 'components/molecules/PrefectureLogo'

import { Att, Head, Dates, Container, Horas } from './styled'
import Calendar from 'src/components/molecules/SchedulingCalendar'
import { useHistory } from 'react-router-dom'
import Confirm from 'src/components/atomic/btn-confirm'

const Registre = () => {
  const history = useHistory()

  const handleOption = () => {
    history.push('options')
  }
  const handleForm = () => {
    history.push('formulario')
  }
  return (
    <Container>
      <Head>
        <h3>Agendamento Online</h3>
        <PrefectureLogo />
      </Head>
      <Att>
        <h3>Atendimento escolhido </h3>
        <Card
          title="Cadastro Novo"
          subtitle="Apenas para os horários de 9:00 horas"
        />
        <Dates>
          <h3>Selecione a data</h3>
          <Calendar />
        </Dates>
      </Att>
      <Horas>
        <h3>Hora selecionada</h3>
        <Card title="9:00 horas" />
      </Horas>

      <ButtonBack onClick={handleOption} src={Img} />
      <Confirm onClick={handleForm} />
    </Container>
  )
}

export default Registre
