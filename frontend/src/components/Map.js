import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ trainData }) => {
  return (
    <MapContainer center={[60.17, 24.94]} zoom={7} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {trainData.map((train, index) => (
        <Marker key={index} position={[train.coordinates[1], train.coordinates[0]]}>
          <Popup>
            <b>Train {train.trainNumber}</b> <br />
            Type: {train.type} <br />
            Speed: {train.speed} km/h <br />
            From: {train.origin} → {train.destination} <br />
            Delay: {train.delay} min
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;