import React from 'react';
import Navbar from '../components/Navbar';
import MainArea from '../components/MainArea';
import DummyBlock from '../components/DummyBlock';

function HomePage(props) {
    return(
        <>
            <Navbar />
            <MainArea cities={props.cities}/>
            <DummyBlock />
        </>
    );
}

export default HomePage;