import { takeLatest, all } from 'redux-saga/effects'
import { AppointmentsTypes } from '../constants/AppointmentsTypes'
import { getAllAppointments, getHoursAppointment } from './appointments'

export default function* rootSaga() {
  return yield all([
    takeLatest(
      AppointmentsTypes.LOAD_APPOINTMENTS_AVAIBLE_REQUEST,
      getAllAppointments,
    ),
    takeLatest(
      AppointmentsTypes.LOAD_HOURS_APPOINTMENTS_AVAIBLE_REQUEST,
      getHoursAppointment,
    ),
  ])
}
