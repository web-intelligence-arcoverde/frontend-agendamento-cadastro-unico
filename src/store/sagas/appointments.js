import {
  loadAppointmentsSuccesss,
  loadAppointmentsHoursSuccesss,
} from '../actions/appointmentsActions'

import { all } from 'react-redux'
import { call, put } from 'redux-saga/effects'

import api from 'src/service'

import DatesMock from 'src/constants/calendar'
import HoursMock from 'src/constants/hours'

export function* getAllAppointments() {
  try {
    yield put(loadAppointmentsSuccesss(DatesMock))

    //const appointments = yield call(api.get, '/')
  } catch (error) {}
}

export function* getHoursAppointment(id) {
  try {
    yield put(loadAppointmentsHoursSuccesss(HoursMock))

    //const appointments = yield call(api.get, '/')
  } catch (error) {}
}
