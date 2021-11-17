import { action } from 'typesafe-actions'
import { ClientTypes, Clients } from './types'

export const loadRequest = () => action(ClientTypes.LOAD_REQUEST)

export const loadSuccess = (data: Clients[]) =>
  action(ClientTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(ClientTypes.LOAD_FAILURE)
