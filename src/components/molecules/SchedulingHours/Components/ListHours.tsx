import { useDispatch, useSelector } from 'react-redux'
import { CardHours } from '../styled'

import {
  selectHourAppointment,
  removeHourAppointment,
} from 'src/store/actions/appointmentsActions'
import CardButton from 'src/components/atomic/CardButton'

import Loading from '../../SchedulingCalendar/Components/Loading'

const Index = () => {
  const dispatch = useDispatch()

  const hoursAppointmentAvaible = useSelector(
    state => state.appointments.appointmentsHoursAvalaible,
  )

  const visibleCardHour = useSelector(
    state => state.appointments.selectedHourVisible,
  )

  const loading = useSelector(
    state => state.appointments.loadingHoursAppointimentAvailable,
  )

  const hourSelected = useSelector(state => state.appointments.selectedHour)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {visibleCardHour ? (
            <CardButton
              title={hourSelected.hours}
              onClick={() => dispatch(removeHourAppointment())}
            />
          ) : (
            <>
              {hoursAppointmentAvaible.map(obj => (
                <CardHours
                  type="button"
                  onClick={() => dispatch(selectHourAppointment(obj))}
                >
                  <h2>{obj.hours}</h2>
                </CardHours>
              ))}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Index
