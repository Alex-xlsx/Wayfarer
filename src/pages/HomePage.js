import React from 'react';
import MainArea from '../components/MainArea';
import DummyBlock from '../components/DummyBlock';


function HomePage(props) {
    return(
        <>
            <MainArea cities={props.cities}/>
            <DummyBlock />
        </>
    );
}

export default HomePage;