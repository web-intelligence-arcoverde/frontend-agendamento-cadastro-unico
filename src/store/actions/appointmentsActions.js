import { AppointmentsTypes } from '../constants/AppointmentsTypes'

export const loadAppointmentsRequest = () => {
  return {
    type: AppointmentsTypes.LOAD_APPOINTMENTS_AVAIBLE_REQUEST,
  }
}

export const loadAppointmentsSuccesss = appointments => {
  return {
    type: AppointmentsTypes.LOAD_APPOINTMENTS_AVAIBLE_SUCCESS,
    payload: appointments,
  }
}

export const selectDateAppointment = date => {
  return {
    type: AppointmentsTypes.SELECTED_DATE_APPOINTMENT,
    payload: date,
  }
}

export const removeDateAppointment = () => {
  return {
    type: AppointmentsTypes.REMOVE_DATE_APPOINTMENT,
  }
}

export const loadAppointmentsHoursRequest = id => {
  return {
    type: AppointmentsTypes.LOAD_HOURS_APPOINTMENTS_AVAIBLE_REQUEST,
    payload: id,
  }
}

export const loadAppointmentsHoursSuccesss = appointments => {
  return {
    type: AppointmentsTypes.LOAD_HOURS_APPOINTMENTS_AVAIBLE_SUCCESS,
    payload: appointments,
  }
}

export const selectHourAppointment = hour => {
  return {
    type: AppointmentsTypes.SELECTED_HOUR_APPOINTMENT,
    payload: hour,
  }
}

export const removeHourAppointment = () => {
  return {
    type: AppointmentsTypes.REMOVE_HOUR_APPOINTMENT,
  }
}
