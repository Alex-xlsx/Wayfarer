import React from 'react';

function City (props) {
    return(
        <div class="city-card">
            <img src={props.city.image} alt=""></img>
            <button>{props.city.name}</button>
        </div>
    );
}

export default City;