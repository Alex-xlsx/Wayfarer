import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
// import Navbar from './components/Navbar';
// import CityCards from './components/CityCards';
import HomePage from './pages/HomePage';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  let cities = [
    {
      name: "Detroit",
      image: "https://media.timeout.com/images/105124788/image.jpg"
    },
    {
        name: "Montreal",
        image: "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-mobile-new.jpg?rev=011f747d198d4cd4884b3ed554360f69"
    },
    {
        name: "Seattle",
        image: "https://thereviewonline.files.wordpress.com/2019/10/2af52e69-3fd1-4438-99d7-487a9b51d03c-gettyimages-878868924.jpg"
    },
    {
        name: "Santa Monica",
        image: "https://media.timeout.com/images/105395973/image.jpg"
    }
  ]

  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
    
  );
}


export default withRouter(App);

