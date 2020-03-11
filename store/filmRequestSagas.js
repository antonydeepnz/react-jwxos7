import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { requestFilms, getFilms, getErrors } from './actionRequestActions'

export const CORS_AVOID = 'https://cors-anywhere.herokuapp.com/' 
export const BASIC_URL = `https://api.themoviedb.org/3/`
export const API_KEY = 'api_key=47e345218071181a1ca1d4eb072cc0cf'
export const LANGUAGE = (lang) => `&language=${lang}`
export const GET_IMAGE = (link, width) => `https://image.tmdb.org/t/p/w${width}/${link}`

const Axios = axios.create({
  baseURL: `${BASIC_URL}`,
  timeout: 1000
})

function* get_Films(){
  const query = 'Матрица'
  try {
    const result = yield call(Axios.get, `search/movie?${API_KEY}&language=ru-RU&query=${query}`)
    console.log(result.data)
    put(getFilms(result.data))
  } catch (err){
    yield put(getErrors(err))
  }
}

export default function* request_Films(){
  yield takeLatest(requestFilms, get_Films)
}