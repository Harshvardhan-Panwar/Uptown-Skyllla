import React from 'react'
import NavBar from "./NavBar/NavBar";
import UnitPlan from "./Components/FloorPlans/UnitPlan";
import GetInTouch from "./Components/GetInTouch";
import Map from "./Components/Map";
import Footer from "./Footer/Footer";

const UnitPlans = () => {
  return (
    <>
    <NavBar />
    <UnitPlan />
    <GetInTouch />
    <Map />
    <Footer />
    </>
  )
}

export default UnitPlans