import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import genres from './reducer'
import filmsReducer from './filmsReducer'
import request from './sagas'

const reducer = combineReducers({
  genres, 
  filmsReducer
})

const logger = createLogger()

const SagaMiddleware = createSagaMiddleware()

const store = createStore (reducer, applyMiddleware(logger, SagaMiddleware))

SagaMiddleware.run(request)

export default store