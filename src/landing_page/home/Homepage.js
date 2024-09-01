import React from 'react';


import OpenAccount from '../OpenAccount';

import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Awards from './Awards';
import Education from './Education';

function HomePage() {
    return ( 
    <>
      
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        
    </> );
}

export default HomePage;