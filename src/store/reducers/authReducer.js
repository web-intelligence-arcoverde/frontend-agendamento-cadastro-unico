import { AuthTypes } from '../constants/authTypes'
const intialState = {
  user: {},
  signedIn: !!localStorage.getItem('@Omni:token'),
  token: localStorage.getItem('@Omni:token') || null,
}

export const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return { ...state, products: payload }
    default:
      return state
  }
}
