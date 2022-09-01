import * as React from "react";
import {
  Circle,
  FeatureGroup,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";
// import "leaflet-draw/dist/leaflet.draw.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://imgs.search.brave.com/aw1dVni_LviMxfQ5VZzno5jpNzDYO9vYpdGzPMgvaXo/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2VvLWludGVy/bmV0LTEzLzYwL3Vz/ZXJfX2xvY2F0aW9u/X19waW5fX21hcF9f/bWFya2VyLTUxMi5w/bmc",
  iconSize: [64, 64],
});
const center: [number, number] = [27.681592, 85.366389];
const Leaflet = () => {
  console.log(L);
  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{
        height: "500px",
        width: "1050px",
      }}
    >
      <TileLayer
        attribution="Aasish Rijal"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={DefaultIcon}>
        <Popup>
          Aasish Rijal <br /> is here.
        </Popup>
      </Marker>
      <FeatureGroup>
        <EditControl
          position="topright"
          // onEdited={this._onEditPath}
          // onCreated={this._onCreate}
          // onDeleted={this._onDeleted}
          draw={
            {
              // rectangle: false
            }
          }
        />
      </FeatureGroup>
    </MapContainer>
  );
};

export default Leaflet;
