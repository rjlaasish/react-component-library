import * as React from "react";

import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";

export default function App() {
    const center: [number, number] = [27.681592, 85.366389];
    return (
        <div className="App">
            <div>
                <MapContainer center={center} zoom={13} style={{
                    height: '550px',
                    width: '1050px'
                }}>
                    <TileLayer
                        attribution='Aasish Rijal'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
}
