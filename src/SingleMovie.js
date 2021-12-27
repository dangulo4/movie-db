import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)
  if (isLoading) {
    return <div className='loading'></div>
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Actors: actors,
    Director: director,
    Awards: awards,
    BoxOffice: boxoffice,
    Writer: writer,
  } = movie
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>
          {year}, directed by {director}
        </h4>
        <p>
          {awards}, {actors}
        </p>
        <p>
          Box office<span style={{ fontWeight: 'bold' }}> {boxoffice}</span>
        </p>
        <p>{writer}</p>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
