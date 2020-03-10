import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux'
import './style.css';

import { getGenres, requestGenres } from './store/actions'

import store from './store/store'

const App = () => {
  const genres = useSelector(state => state.genres.data)
  const dispatch = useDispatch()
  return(
    <>
      {
        genres.map(i => (<li>{i.name}</li>))
      }
      <button onClick={() => dispatch(requestGenres())}>Click</button>
    </>
  )
}

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
