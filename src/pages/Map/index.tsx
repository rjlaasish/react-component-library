import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicMap from "./BasicMap";
import Leaflet from "./CustomMap";

const Maps = () => {
    return (
        <Routes>
            <Route path="/" element={<BasicMap />}/>
            <Route path="/custom-style" element={<Leaflet />} />
        </Routes>
    );
};

export default Maps;
