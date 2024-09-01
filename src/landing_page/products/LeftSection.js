import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 ">
            <img src={imageUrl}/>
        </div>
        <div className="col-6 ">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
            <a href={googlePlay}><img src="images/googlePlayBadge.svg"></img></a>
            <a href={appStore}><img src="images/appstoreBadge.svg"></img></a>
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
