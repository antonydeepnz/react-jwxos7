import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux'
import './style.css';

import { requestGenres } from './store/actions'
import { requestFilms } from './store/actionRequestActions'


import store from './store/store'
//https://material.io/resources/icons/?search=chevron&icon=chevron_right&style=baseline

const App = () => {
  const genres = useSelector(state => state.genres.data)
  const films = useSelector(state => state.films.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGenres())
    dispatch(requestFilms())
  }, [])
  
  return(
    <>
      {
        genres.map(i => (<li key={i.id}>{i.name}</li>))
      }
      <button onClick={() => console.log(films)}>Click</button>
    </>
  )
}
//

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
