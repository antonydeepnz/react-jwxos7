import { put, call, takeEvery } from 'redux-saga'
import { getGenres, requestGenres } from './actions'

function* getGenres(){
  try{
    const res = yield call()
  } catch (e){
    yield console.log(e)
  }
}

function* request(){
  yield takeEvery(requestGenres, getGenres)
}

export default request