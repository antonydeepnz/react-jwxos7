import { handleActions } from 'redux-actions'

import { getGenres, requestGenres } from './actions'

const initialState = {
  data: []
}

export default handleActions(
  {
    [getGenres]: (state, {payload}) => ({data: [...state, ...payload.genres]}),
    [requestGenres]: (state) => ({...state})
  },
  initialState
)