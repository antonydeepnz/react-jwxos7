import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './style.css';

import store from './store/store'

const App = () => {
  return(
    <>

    </>
  )
}

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
