import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, useSelector } from 'react-redux'
import './style.css';

import store from './store/store'

const App = () => {
  const genres = useSelector(state => state.genres.data)
  return(
    <>
      {
        genres.map(i => (<li>{i}</li>))
      }
    </>
  )
}

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
