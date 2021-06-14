import React from 'react';
import Navbar from '../components/Navbar';
import MainArea from '../components/MainArea';
import DummyBlock from '../components/DummyBlock';
import Footer from '../components/Footer';

function HomePage(props) {
    return(
        <>
            <MainArea cities={props.cities}/>
            <DummyBlock />
        </>
    );
}

export default HomePage;