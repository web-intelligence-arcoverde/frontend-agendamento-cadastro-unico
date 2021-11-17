/**
 * Action types
 */
export enum ClientTypes {
  CREATE_APPOINTMENT_REQUEST = '@client/CREATE_APPOINTMENT_REQUEST',
  CREATE_APPOINTMENT_SUCCESS = '@client/CREATE_APPOINTMENT_SUCCESS',
  LOAD_REQUEST = "@client/LOAD_REQUEST",
  LOAD_SUCCESS = "@client/LOAD_SUCCESS",
  LOAD_FAILURE = "@client/LOAD_FAILURE"
}

/**
 * Data types
 */
export interface Clients {
  id: number
  name: string
}

/**
 * State type
 */
export interface ClientsStates {
  readonly data: Clients[]
  readonly loading: boolean
  readonly error: boolean
}
