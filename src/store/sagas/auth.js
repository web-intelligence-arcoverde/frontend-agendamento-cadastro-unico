import { signInSuccess } from '../actions/authActions'

import { all } from 'react-redux'
import { call, put } from 'redux-saga/effects'

import api from 'src/service'

export function* signInRequest(email, password) {
  try {
    const auth = yield call(api.post, '/signin', { email, password })

    yield put(signInSuccess(auth))
  } catch (error) {}
}

export function* getHoursAppointment(id) {
  try {
    yield put(loadAppointmentsHoursSuccesss(HoursMock))

    //const appointments = yield call(api.get, '/')
  } catch (error) {}
}
