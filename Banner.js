import React, { useEffect, useState } from 'react'

import './style/banner.css';
import axios from './localaxios';
import userRequest from './Request';
function Banner() {
   // 14e741886a403f8de4be3594c9f570e7
   const [movie,setMovie]=useState([]);
   useEffect(()=>{
    async function fetchData(){
        const request =await axios.get(userRequest.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random()*(request.data.results.length))-1])
        
    }
    fetchData();
   },[])
   
  return (
    <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
    backgroundPosition:'center',
    backgroundSize:'cover'}}>

       <div className='banner__content'>
          <h1>
            {movie?.title || movie?.orginal_name || movie?.name}
          </h1>
          <div className='banner__button'>
            <button>Play</button>
            <button>My List</button>
          </div>
          <div className='banner__description'>
            <p>
            {movie?.overview}
            </p>
          </div>
       </div>
       <div className="fade-gradient">
       </div>
    </div>
  )
}

export default Banner