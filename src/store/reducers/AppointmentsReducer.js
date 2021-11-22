import { AppointmentsTypes } from '../constants/AppointmentsTypes'

const intialState = {
  appointmentsAvalaible: [],
  loading: false,

  selectedDate: {},
  selectedDateVisible: false,

  appointmentsHoursAvalaible: [],
  loadingHoursAppointimentAvailable: false,

  selectedHour: {},
  selectedHourVisible: false,
}

export const appointmentsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case AppointmentsTypes.LOAD_APPOINTMENTS_AVAIBLE_REQUEST:
      return { ...state, loading: true }
    case AppointmentsTypes.LOAD_APPOINTMENTS_AVAIBLE_SUCCESS:
      return { ...state, appointmentsAvalaible: payload, loading: false }

    case AppointmentsTypes.SELECTED_DATE_APPOINTMENT:
      return { ...state, selectedDate: payload, selectedDateVisible: true }

    case AppointmentsTypes.REMOVE_DATE_APPOINTMENT:
      return {
        ...state,
        selectedDate: {},
        selectedDateVisible: false,
        selectedHour: {},
        selectedHourVisible: false,
      }

    case AppointmentsTypes.LOAD_HOURS_APPOINTMENTS_AVAIBLE_REQUEST:
      if (state.selectedDateVisible) {
        return { ...state, loadingHoursAppointimentAvailable: true }
      }

    case AppointmentsTypes.LOAD_HOURS_APPOINTMENTS_AVAIBLE_SUCCESS:
      return {
        ...state,
        appointmentsHoursAvalaible: payload,
        loadingHoursAppointimentAvailable: false,
      }

    case AppointmentsTypes.SELECTED_HOUR_APPOINTMENT:
      return { ...state, selectedHour: payload, selectedHourVisible: true }

    case AppointmentsTypes.REMOVE_HOUR_APPOINTMENT:
      return { ...state, selectedHour: {}, selectedHourVisible: false }

    default:
      return state
  }
}
