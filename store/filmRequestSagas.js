import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { requestFilms, getFilms, getErrors } from './actionRequestActions'

function* get_Films(){
  try {
    const res = yield call()
    put(getFilms(res.data))
  } catch (err){
    yield put(getErrors(err))
  }
}

export default function* requestFilms(){
  yield takeLatest()
}