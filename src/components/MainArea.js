import React from 'react';
import CityCards from './CityCards';
import w from "../w.png";

function MainArea(props) {
    return (
      <main>
        <div className="row title-box">
          <h1>Wayfarer</h1>
          <img src={w} width="200" height="200"></img>
        </div>
        <div className="home-section-1">
          <form>
            <h3>Sign Up</h3>
            <input type="text" placeholder="Name..."></input>
            <input type="text" placeholder="Email..."></input>
            <button>Submit</button>
          </form>
          <div className="dummy-carousel">
            <img src='https://images.unsplash.com/photo-1534430224470-f52e596ced9f?ixid=MnwxMjA3fDB8MHxzZWFy[…]ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width="200" height="300"></img>
          </div>
        </div>
        <CityCards cities={props.cities}/>
      </main>
    );
  };


export default MainArea;
// Need to import this page when we work on routes.js