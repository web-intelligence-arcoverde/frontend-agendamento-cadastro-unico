import { combineReducers } from 'redux'

import { appointmentsReducer } from './AppointmentsReducer'

const reducers = combineReducers({
  appointments: appointmentsReducer,
})
export default reducers
