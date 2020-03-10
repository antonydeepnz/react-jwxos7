import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { requestFilms, getFilms, getErrors } from './actionRequestActions'

function* get_Films(){
  const res = yield call()
}

export default function* requestFilms(){
  yield takeLatest()
}