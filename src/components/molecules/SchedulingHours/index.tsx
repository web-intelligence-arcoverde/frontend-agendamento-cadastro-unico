import { useEffect } from 'react'

import { Container } from './styled'

import { useDispatch, useSelector } from 'react-redux'

import HoursList from './Components/ListHours'
import Loading from '../SchedulingCalendar/Components/Loading'

import { loadAppointmentsHoursRequest } from 'src/store/actions/appointmentsActions'

const Hours = () => {
  const dispatch = useDispatch()
  const selectedDateVisible = useSelector(
    state => state.appointments.selectedDateVisible,
  )

  useEffect(() => {
    dispatch(loadAppointmentsHoursRequest())
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <h4>Selecione o Horario</h4>
      </div>
      <Container>{selectedDateVisible ? <HoursList /> : <></>}</Container>
    </div>
  )
}

export default Hours
