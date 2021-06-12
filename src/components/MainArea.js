import React from 'react';
import CityCards from './CityCards';

function MainArea(props) {
    return (
      <div className="signup_form">
        <img src="" alt="Sign Up Form "/>
        <img src="" alt="Sign Up Form "/>
        {/* <div></div> To Do: rotating image */}
        <CityCards cities={props.cities}/>
      </div>
    );
  };


export default MainArea;
// Need to import this page when we work on routes.js