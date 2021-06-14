import React from 'react';
import City from './City';

function AllCityCards(props) {
    let cities = threeCities.map((city) => {
        return(
            <City key={city._id} city={city}/>
        )
    })

    return (
        <ul className="city-card-main">
            {cities}
        </ul>
    )
}

export default AllCityCards;