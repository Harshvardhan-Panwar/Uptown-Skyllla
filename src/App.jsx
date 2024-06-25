import React from "react";
import NavBar from "./NavBar/NavBar";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Villasforsales from "./Components/Villasforsales";
import VillasHighlights from "./Components/VillasHighlights";
import CheckoutVillasPhoto from "./Components/CheckoutVillasPhoto";
import LocationMap from "./Components/LocationMap";
import NearByLocation from "./Components/NearByLocation";
import MasterPlane from "./Components/MasterPlane";
import ModernAmenities from "./Components/ModernAmenities";
import PriceList from "./Components/PriceList";
import Faq from "./Components/Faq";
import VideoBanner from "./Components/VideoBanner";
import HomeLoan from "./Components/HomeLoan";
import GetInTouch from "./Components/GetInTouch";
import Testimonial from "./Components/Testimonial";
import Map from "./Components/Map";
import Footer from "./Footer/Footer";
import Floorplans from "./Components/FloorPlans";

function App() {
  return (
    <>
      <div className="font-lato overflow-hidden">
        <NavBar />
        <Feature />
        <About />
        <Villasforsales />
        <VillasHighlights />
        <CheckoutVillasPhoto />
        <LocationMap />
        <NearByLocation />
        <Floorplans />
        <MasterPlane />
        <ModernAmenities />
        <PriceList />
        <Faq />
        <VideoBanner />
        <HomeLoan />
        <GetInTouch />
        <Testimonial />
        <Map />
        <Footer />
      </div>
    </>
  );
}

export default App;
