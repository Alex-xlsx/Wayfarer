import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
    
  );
}


export default withRouter(App);

