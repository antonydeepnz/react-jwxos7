import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'

import { requestGenres, getGenres, getError } from './actions'
import axios from 'axios'

export const CORS_AVOID = 'https://cors-anywhere.herokuapp.com/' 
export const BASIC_URL = `https://api.themoviedb.org/3/`
export const API_KEY = 'api_key=47e345218071181a1ca1d4eb072cc0cf'
export const LANGUAGE = (lang) => `&language=${lang}`
export const GET_IMAGE = (link, width) => `https://image.tmdb.org/t/p/w${width}/${link}`

const Axios = axios.create({
  baseURL: `${BASIC_URL}`,
  timeout: 1000
})

export function* get_Genres(){
  try {
    const res = yield call(Axios.get,`genre/movie/list?${API_KEY}&language=ru-RU`)
    yield put(getGenres(res.data));
  } catch (err){
    yield put(getError(err))
  }
}

export default function* request(){
  yield takeLatest(requestGenres, get_Genres)
}