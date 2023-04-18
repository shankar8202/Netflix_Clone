import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import './App.css'
import Row from './component/row'
import requests from './component/request'
import  './component/row.css';
import Banner from './component/banner'
import Navbar from './component/navbar'
//navbar
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Tvshow from './NavbarHeading/Tvshow'
// import Movies from './NavbarHeading/Movies'
// import NewPopular from './NavbarHeading/NewPopular'
// import Mylist from './NavbarHeading/Mylist'
// import BrowserLan from './NavbarHeading/browserLan'
// import Home from './NavbarHeading/Home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <Navbar/> 
 
 <Banner/>


   <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
   isLargeRow
   />
   <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
   <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
   <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
   <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
   <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

  </React.StrictMode>,
)
