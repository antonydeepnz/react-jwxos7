import { handleActions } from 'redux-actions'

import { getGenres, requestGenres } from './actions'

const initialState = {
  data: ['qwewqr','ewrewr']
}

export default handleActions(
  {
    [getGenres]: (state, {payload}) => ({data: [...state, ...payload]}),
    [requestGenres]: (state) => ({...state})
  },
  initialState
)