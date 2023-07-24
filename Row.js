import React, { useEffect, useState } from 'react'
import './style/row.css';
import axios from './localaxios';
const baseURL="https://image.tmdb.org/t/p/original/";
function Row({title,isLarge,fetchUrl}) {
    const [movies,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovie(request.data.results);
        }
        fetchData();
    },
    [fetchUrl])
  return (
    <div className='row'>
    <h2>{title}</h2>
   
    <div className='row__poster'>
    {
        movies.map(movie=>{
            return (
            <img src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
             className={`rowposter ${isLarge && "isLargeImg"}`} key={movie.id} />
            )
        })
    }
   
   
    </div>

    </div>
  )
}

export default Row