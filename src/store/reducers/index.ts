import { combineReducers } from 'redux'

import { appointmentsReducer } from './AppointmentsReducer'
import { authReducer } from './authReducer'

const reducers = combineReducers({
  appointments: appointmentsReducer,
  auth: authReducer,
})
export default reducers
