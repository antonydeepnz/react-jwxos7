import { put, call, takeEvery } from 'redux-saga'
import { getGenres, requestGenres } from './actions'
import axios from 'axios'

export const CORS_AVOID = 'https://cors-anywhere.herokuapp.com/' 
export const BASIC_URL = `https://api.themoviedb.org/3/`
export const API_KEY = 'api_key=47e345218071181a1ca1d4eb072cc0cf'
export const LANGUAGE = (lang) => `&language=${lang}`
export const GET_IMAGE = (link, width) => `https://image.tmdb.org/t/p/w${width}/${link}`

const Axios = axios.create({
  baseURL: `${BASIC_URL}`,
  timeout: 1000,
  
})

function* getGenres(){
  try{
    const res = yield call(Axios, action.payload)
    console.log(res)
  } catch (e){
    yield console.log(e)
  }
}

function* request(){
  yield takeEvery(requestGenres, getGenres)
}

export default request