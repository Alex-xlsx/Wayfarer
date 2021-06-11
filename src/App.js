import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
       <Routes />
      
    </div>
    
  );
}


export default withRouter(App);

