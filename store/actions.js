import { createActions } from 'redux-actions'

export const { requestGenres, getGenres, getError } = createActions(
  'REQUEST_GENRES',
  'GET_GENRES',
  'GET_ERROR'
)