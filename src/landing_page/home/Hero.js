import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="images/homeHero.png"
          alt="hero"
          style={{ width: "100%" }}
          className="mb-5 mx-auto"
        />
        <h1 className="mt-5">Invest in everything.</h1>
        <p>
          Online platform for invest stocks, derivatives, mutual funds, and more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
