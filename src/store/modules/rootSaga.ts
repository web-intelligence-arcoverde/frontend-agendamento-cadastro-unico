import { all, takeLatest } from 'redux-saga/effects'

import { RepositoriesTypes } from './user/types'
import { load } from './user/sagas'

export default function* rootSaga() {
  return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)])
}
