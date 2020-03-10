import { handleActions } from 'redux-actions'

import { getGenres, requestGenres } from './actions'

const initialState = {
  data: []
}

export default handleActions(
  {
    [requestGenres]: (state) => ({...state}),
    [getGenres]: (state, {payload}) => ({data: [...state.data, ...payload.genres]})
  },
  initialState
)