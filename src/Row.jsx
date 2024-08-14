import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';


const Row = ({title,fetchUrl,isLargeRow=false}) => {

    const [movies,setMovies]=useState([]);

    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
          try {
            const request = await axios.get(fetchUrl);
            console.log("Full response:", request);
            setMovies(request.data.results);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, [fetchUrl]);

    console.log(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
<div className="row-posters">
{movies.map(movie=>{
       if (isLargeRow && movie.poster_path || !isLargeRow && movie.backdrop_path) {
         return (
           <img  className={`row-poster ${isLargeRow && "row-posterLarge"}`}
           key={movie.id}
           src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path
    }`}
           alt={movie.name} />
         );
       }
       return null;
 })}
      </div>
    </div>
  )
}

export default Row
