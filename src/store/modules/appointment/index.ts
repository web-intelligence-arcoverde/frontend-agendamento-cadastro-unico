import { Reducer } from 'redux'
import { ClientsStates, ClientTypes } from './types'

const INITIAL_STATE: ClientsStates = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<ClientsStates> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case ClientTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      }
    case ClientTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      }
    default:
      return state
  }
}

export default reducer
