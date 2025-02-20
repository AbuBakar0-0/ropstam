import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "./../../layout/Navbar";
import { Button } from "./../../components/ui/Button";

function Hero() {
    return (
        <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url("/assets/hero-bg.png")` }}
        >
            <div className="h-screen container mx-auto px-5 lg:px-20 py-8 flex flex-col justify-between items-center">
                <Navbar />
                <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                    <p className="text-white text-lg md:text-2xl">
                        No lines. Less hassle, Lower costs.
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white w-full md:w-3/4 lg:w-1/2 leading-tight">
                        Easy Online Suboxone Treatment for Opioid Addiction
                    </h1>
                    <Button title={"Download the app today"} icon={<FiArrowUpRight />} />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Hero;
