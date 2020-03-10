import { createActions } from 'redux-actions'

export const { getGenres, requestGenres } = createActions(
  'GET_GENRES',
  'REQUEST_GENRES'
)