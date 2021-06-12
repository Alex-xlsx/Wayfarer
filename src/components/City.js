import React from 'react';

function City (props) {
    return(
        <div class="city-card-container">
            <img src={props.city.image} alt="" width="200" height="200"></img>
            <p>{props.city.name}</p>
        </div>
    );
}

export default City;