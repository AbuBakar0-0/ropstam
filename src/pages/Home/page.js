import React from "react";
import BreakingBarriers from "./BreakingBarriers";
import FeaturedOn from "./FeaturedOn";
import Hero from "./Hero";
import RecoveryDelivered from "./RecoveryDelivered";
import SuboxoneTreatment from "./SuboxoneTreatment";
import Testimonials from "./Testimonials";
import GetYourMeds from "./GetYourMeds";
import StatesWeServe from "./StatesWeServe";
import Footer from "./../../layout/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BreakingBarriers />
      <RecoveryDelivered />
      <Testimonials />
      <SuboxoneTreatment />
      <FeaturedOn />
      <StatesWeServe />
      <GetYourMeds />
      <Footer />
    </>
  );
}

export default Home;
