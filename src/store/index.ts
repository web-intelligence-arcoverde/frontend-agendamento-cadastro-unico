import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducers from './reducers/index'
import rootSaga from './sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(
  rootReducers,
  {},
  applyMiddleware(...middleware, logger),
)

sagaMiddleware.run(rootSaga)

export default store
