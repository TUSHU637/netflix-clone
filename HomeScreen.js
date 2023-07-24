import React from 'react'
import './style/homescreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import userRequest from './Request'
function HomeScreen() {
  return (
    <div className='homescreen'>
    <Nav />
    <Banner />

    <Row title="Netflix Original" isLarge fetchUrl={userRequest.fetchNetflixOriginals} />
    <Row title="Trending"  fetchUrl={userRequest.fetchTrending}/>
    <Row title="Top Rated"   fetchUrl={userRequest.fetchTopRated}/>
    <Row title="Action Movie"   fetchUrl={userRequest.fetchActionMovies}/>
    <Row title="Comedy Movie"   fetchUrl={userRequest.fetchComedyMovies}/>
    <Row title="Horror Movie"   fetchUrl={userRequest.fetchHorrorMovies}/>
    <Row title="Romance Movie"   fetchUrl={userRequest.fetchRomanceMovies}/>
    <Row title="Documentries"   fetchUrl={userRequest.fetchDocumentaries}/>
        
    </div>
  )
}

export default HomeScreen