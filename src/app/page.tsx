import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";
import Burger from "./components/Burger";
import ProductCardGrid from "./components/MenuItem";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="bg-amber-950 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Burger />
      <Banner />
      <ProductList />
      <ProductCardGrid />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
