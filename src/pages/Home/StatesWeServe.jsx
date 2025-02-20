import React from "react";
import { MdLocationPin } from "react-icons/md";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import USMapData from "../../data/us-states.json"; // GeoJSON file for US states
import { geoCentroid } from "d3-geo"; // Import for calculating state centroids

const StatesWeServe = () => {
    const smallStates = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"];
    const stateOffsets = {
        VT: { dx: 20, dy: -10 },
        NH: { dx: 30, dy: -10 },
        MA: { dx: 35, dy: 5 },
        RI: { dx: 40, dy: 10 },
        CT: { dx: 35, dy: 15 },
        NJ: { dx: 35, dy: 25 },
        DE: { dx: 40, dy: 30 },
        MD: { dx: 40, dy: 35 },
        DC: { dx: 45, dy: 40 },
    };

    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-8 py-8 px-5 lg:px-20">
            <h3 className="uppercase text-primary text-sm sm:text-base">States WE</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center">
                Currently Serve
            </h2>
            <p className="w-full md:w-2/3 text-slate-600 text-center text-sm sm:text-base">
                We believe everyone should have access to treatment and care. That’s why we’re teaming up with providers all over the country. Click on a green state to see the insurance companies we currently accept and to learn more about online Suboxone doctors in your area.
            </p>
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4">
                    <img src="/assets/toronto.png" alt="toronto.png" className="sm:w-48 md:w-56 lg:w-96" />
                    <h3 className="font-bold text-2xl sm:text-3xl">Toronto</h3>
                    <div className="flex flex-row justify-center lg:justify-start items-center gap-2">
                        <MdLocationPin className="text-secondary text-xl sm:text-2xl" />
                        <a href="" className="text-secondary underline font-medium text-sm sm:text-base">
                            Ottawa St. and Homer Watson Blvd.
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 map-container">
                    <ComposableMap projection="geoAlbersUsa">
                        <Geographies geography={USMapData}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const abbreviation = geo.properties?.abbreviation || ""; // Ensure abbreviation exists
                                    let centroid = geoCentroid(geo); // Try to get state centroid

                                    // Validate centroid
                                    if (!Array.isArray(centroid) || centroid.length !== 2) {
                                        centroid = [0, 0]; // Default fallback to avoid errors
                                    }

                                    return (
                                        <React.Fragment key={geo.rsmKey}>
                                            <Geography
                                                geography={geo}
                                                style={{
                                                    default: {
                                                        fill: "#49c7ab", // Light teal color
                                                        stroke: "#FFF",
                                                        outline: "none",
                                                    },
                                                    hover: {
                                                        fill: "#fa846d", // Coral color on hover
                                                        outline: "none",
                                                    },
                                                    pressed: {
                                                        fill: "#E42",
                                                        outline: "none",
                                                    },
                                                }}
                                            />
                                            {abbreviation && ( // Ensure annotation only appears when abbreviation exists
                                                <Annotation
                                                    subject={centroid}
                                                    dx={smallStates.includes(abbreviation) ? stateOffsets[abbreviation]?.dx || 0 : 0}
                                                    dy={smallStates.includes(abbreviation) ? stateOffsets[abbreviation]?.dy || 0 : 0}
                                                    connectorProps={{ stroke: "none" }}
                                                >
                                                    <text
                                                        x="0"
                                                        y="0"
                                                        textAnchor="middle"
                                                        fill="#222"
                                                        fontSize={14}
                                                        fontWeight="bold"
                                                    >
                                                        {abbreviation}
                                                    </text>
                                                </Annotation>
                                            )}
                                        </React.Fragment>
                                    );
                                })
                            }
                        </Geographies>
                    </ComposableMap>
                </div>
            </div>
        </div>
    );
};

export default StatesWeServe;
