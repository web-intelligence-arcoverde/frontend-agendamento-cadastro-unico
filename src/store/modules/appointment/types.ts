/*
 
  - action types
 
*/

export enum AppointmentTypes {
  CREATE_APPOINTMENT_REQUEST = '@client/CREATE_APPOINTMENT_REQUEST',
  CREATE_APPOINTMENT_SUCCESS = '@client/CREATE_APPOINTMENT_SUCCESS',
  VISIBLE_APPOIINTMENT_DAYS = "@client/VISIBLE_APPOIINTMENT_DAYS",
  LOAD_REQUEST = "@client/LOAD_REQUEST",
  LOAD_SUCCESS = "@client/LOAD_SUCCESS",
  LOAD_FAILURE = "@client/LOAD_FAILURE"
}

/*
  
  - data types
 
 */

export interface Appointments {
  id: number
  name: string
}

/*
 
  - state type
 
*/
export interface AppointmentsStates {
  readonly data: Appointments[]
  readonly loading: boolean
  readonly error: boolean
}
