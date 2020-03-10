import { handleActions } from 'redux-actions'

import { getGenres, requestGenres, getError } from './actions'

const initialState = {
  data: [],
  error: ''
}

export default handleActions(
  {
    [requestGenres]: (state) => ({...state}),
    [getGenres]: (state, {payload}) => ({...state, data: [...payload.genres]}),
    [getError]: (state, {payload}) => ({...state, error: payload.error})
  },
  initialState
)