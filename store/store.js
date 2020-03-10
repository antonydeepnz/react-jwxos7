import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import genres from './reducer'

const reducer = combineReducers({genres})

const SagaMiddleware = createSagaMiddleware()

export default createStore (reducer, applyMiddleware(logger, SagaMiddleware))

//SagaMiddleware.run()