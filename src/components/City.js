import React from 'react';

function City (props) {
    return(
        <div class="city-card-container">
            <img src={props.city.image} alt=""></img>
            <p>{props.city.name}</p>
        </div>
    );
}

export default City;