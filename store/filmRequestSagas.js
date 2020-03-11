import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { requestFilms, getFilms, getErrors } from './actionRequestActions'

export const CORS_AVOID = 'https://cors-anywhere.herokuapp.com/' 
export const BASIC_URL = `https://api.themoviedb.org/3/`
export const API_KEY = 'api_key=47e345218071181a1ca1d4eb072cc0cf'

const Axios = axios.create({
  baseURL: `${BASIC_URL}`,
  timeout: 1000
})

function* get_Films(){
  const query = 'Matrix'
  try {
    const result = yield call(Axios.get, `search/movie?${API_KEY}&language=ru-RU&query=Matrix`)
    yield console.log(result.data.results)
    //yield put(getFilms(result.data))
  } catch (err){
    yield put(getErrors(err))
  }
}

export default function* request_Films(){
  yield takeLatest(requestFilms, get_Films)
}