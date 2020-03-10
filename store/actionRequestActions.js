import { createActions } from 'redux-actions'

export const { requestFilms, getFilms, getErrors } = createActions(
  'REQUEST_FILMS',
  'GET_FILMS',
  'GET_ERRORS'
)