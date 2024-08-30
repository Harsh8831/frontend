import React from 'react';

import Navbar from '../NavBar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Awards from './Awards';
import Education from './Education';

function HomePage() {
    return ( 
    <>
       
        <Awards />
        <Hero />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        
    </> );
}

export default HomePage;