import { AuthTypes } from '../constants/authTypes'

export const signInRequest = (email, password) => {
  return {
    type: AuthTypes.SIGN_IN_REQUEST,
  }
}

export const signInSuccess = user => {
  return {
    type: AuthTypes.SIGN_IN_SUCCESS,
    payload: user,
  }
}

export const signOut = date => {
  return {
    type: AuthTypes.SIGN_OUT,
  }
}
