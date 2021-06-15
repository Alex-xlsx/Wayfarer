import React from 'react';
import City from './City';

function AllCityCards(props) {
    let cities = props.cities.map((city) => {
        return(
            <City key={city._id} city={city}/>
        )
    })

    return (
        <ul className="city-card-all">
            {cities}
        </ul>
    )
}

export default AllCityCards;