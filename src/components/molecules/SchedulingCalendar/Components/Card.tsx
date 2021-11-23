import { useDispatch, useSelector } from 'react-redux'
import CardComponent from 'src/components/atomic/CardButton'
import { Card } from '../styled'

import {
  selectDateAppointment,
  removeDateAppointment,
  loadAppointmentsHoursRequest,
} from 'src/store/actions/appointmentsActions'

const CardsOption = () => {
  const availableDatesScheduling = useSelector(
    state => state.appointments.appointmentsAvalaible,
  )

  const selectedDate = useSelector(state => state.appointments.selectedDate)
  const selectedDateVisible = useSelector(
    state => state.appointments.selectedDateVisible,
  )

  const dispatch = useDispatch()

  return (
    <>
      {!selectedDateVisible ? (
        <>
          {availableDatesScheduling.map(obj => (
            <Card
              type="button"
              onClick={() => dispatch(selectDateAppointment(obj))}
            >
              <h3>{obj.data}</h3>
              <p>{obj.day}</p>
            </Card>
          ))}
        </>
      ) : (
        <div style={{ width: '100%' }}>
          <CardComponent
            onClick={() => dispatch(removeDateAppointment())}
            title={selectedDate.data}
            subtitle={selectedDate.day}
          />
        </div>
      )}
    </>
  )
}

export default CardsOption
