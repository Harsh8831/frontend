import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function Product() {
    return ( 
      <>
        <Hero/>
        <LeftSection   imageUrl=""  productName="Product Name"  productDescription="Product Description"  tryDemo=""  learnMore=""  googlePlay=""  appStore=""/>

        <RightSection/>
        <LeftSection/>

      </>
     );
}

export default Product;