import React, { useState, useEffect } from 'react'
import axios from './axios.js'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])

  // A snippet of code which runs based on specific condition/variable
  useEffect(() => {
    //
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  // console.log(movies)
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          )
        })}
      </div>
    </div>
  )
}

export default Row
