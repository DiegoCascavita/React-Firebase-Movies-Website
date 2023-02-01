import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>

        <Banner/>

        <Row 
          title='NETFLIX ORIGINAL'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen;
