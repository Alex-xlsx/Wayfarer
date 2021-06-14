import React from 'react';
import DummyBlock from '../components/DummyBlock';
import CityContainer from '../containers/CityContainer';


function HomePage(props) {
    return(
        <>
            <CityContainer cities={props.cities}/>
            <DummyBlock />
        </>
    );
}

export default HomePage;