import React from 'react';
import { Link } from 'react-router-dom';

function City (props) {
    return(
        <Link to={`/cities/${props.city._id}`}>
            <div class="city-card">
                <img src={props.city.image} alt=""></img>
                <button>{props.city.name}</button>
            </div>
        </Link>
    );
}

export default City;