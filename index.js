import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, useSelector } from 'react-redux'
import './style.css';

import store from './store/store'

const App = () => {
  const data = useSelector(state = state.genres)
  return(
    <>

    </>
  )
}

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
