import React from 'react';
import City from './City'

function CityCards(props) {

    const threeCities = props.cities.slice(0, 3);

    let cities = threeCities.map((city) => {
        return(
            <City key={city._id} city={city}/>
        )
    })

    return (
        <ul>
            {cities}
        </ul>
    )
}

export default CityCards;