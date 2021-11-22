import { useEffect } from 'react'
import { Container } from './styled'

import { useDispatch, useSelector } from 'react-redux'
import { loadAppointmentsRequest } from 'src/store/actions/appointmentsActions'

import Loading from './Components/Loading'
import CardOption from './Components/Card'

const Calendar = () => {
  const dispatch = useDispatch()

  const loading = useSelector(state => state.appointments.loading)

  useEffect(() => {
    dispatch(loadAppointmentsRequest())
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <h4>Selecione a data</h4>
      </div>

      <Container>{loading ? <Loading /> : <CardOption />}</Container>
    </div>
  )
}

export default Calendar
