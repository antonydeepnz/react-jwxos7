import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { requestFilms, getFilms, getErrors } from './actionRequestActions'

function* get_Films(){
  try {
    const result = yield call()
    put(getFilms(result.data))
  } catch (err){
    yield put(getErrors(err))
  }
}

export default function* requestFilms(){
  yield takeLatest()
}