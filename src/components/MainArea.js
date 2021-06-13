import React from 'react';
import CityCards from './CityCards';

function MainArea(props) {
    return (
      <main>
        <h1>Wayfarer</h1>
        <div className="home-section-1">
          <form>
            <h3>Sign Up</h3>
            <input type="text" placeholder="Name..."></input>
            <input type="text" placeholder="Email..."></input>
            <button>Submit</button>
          </form>
          <div className="dummy-carousel">
            <img src='https://picsum.photos/id/10/200/300'></img>
          </div>
        </div>
        <CityCards cities={props.cities}/>
      </main>
    );
  };


export default MainArea;
// Need to import this page when we work on routes.js