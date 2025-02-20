import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../../components/ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

function GetYourMeds() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: "ease-out-back" });
  }, []);

  return (
    <div
      className="relative py-10 md:py-20 mt-10 bg-cover bg-center px-5 lg:px-20 overflow-hidden "
      style={{ backgroundImage: `url("/assets/stripes.gif")` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-white/80"></div>

      {/* Content Inside */}
      <div className=" container mx-auto relative z-10 text-center flex flex-col justify-center items-center gap-4">
        <h3 className="uppercase font-medium text-lg sm:text-xl md:text-2xl" data-aos="slide-right">
          SECURE ACCESS TO YOUR MEDICATIONS
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium" data-aos="slide-left">
          Get Your Meds Online Today
        </h2>
        <h3 className="w-full md:w-3/4 lg:w-1/2 text-sm sm:text-base md:text-lg">
          We have partnered with RX-Outreach to provide mail order medications
          at a fraction of the price you may find in your local pharmacy. Meet
          your chronic illness provider online today and get your medication
          delivered as quickly as 24 hours later.
        </h3>
        <Button
          title="Get the App"
          icon={<FiArrowUpRight />}
          bgColor="bg-black"
          className="font-bold"
        />
      </div>
    </div>
  );
}

export default GetYourMeds;
