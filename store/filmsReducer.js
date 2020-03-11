import { handleActions } from 'redux-actions'

import { requestFilms, getFilms, getErrors } from './actionRequestActions'

const initialState = {
  data: [],
  error: ''
}

export default handleActions(
  {
    [requestFilms]: ( state ) => ({...state}),
    [getFilms]: ( state, { payload }) => ({...state, data: [...payload.films]}),
    [getErrors]: ( state, { payload }) => ({...state, error: payload.error})
  },
  initialState
)