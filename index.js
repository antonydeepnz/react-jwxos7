import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux'
import './style.css';

import { getGenres, requestGenres } from './store/actions'

import store from './store/store'
//https://material.io/resources/icons/?search=chevron&icon=chevron_right&style=baseline

const App = () => {
  const genres = useSelector(state => state.genres.data)
  //const genre = useSelector(state => state.genres.data.id === props.id)
  const dispatch = useDispatch()
  return(
    <>
      {
        genres.map(i => (<li key={i.id}>{i.name}</li>))
      }
      <button onClick={() => dispatch(requestGenres())}>Click</button>
    </>
  )
}

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
