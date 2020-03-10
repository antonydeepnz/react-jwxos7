import React from 'react'
import { useSelector } from 'react-redux'

export default ({ id }) => {
  const genre = useSelector(state => state.genres.data.id === id)
  return(
    <span>
      { genre }
    </span>
  )
}