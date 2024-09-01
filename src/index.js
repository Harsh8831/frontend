import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/Homepage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/Product";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/Support";
import NotFound from "./landing_page/NotFound";
import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/support" element={<Support />}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
