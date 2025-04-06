import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles.css"; 


const trainIcon = L.icon({
  iconUrl: "/images/trainLogo.jpg",  
  iconSize: [30, 30],  
  iconAnchor: [15, 25],
  popupAnchor: [0, -25],
});

const Map = ({ trainData }) => {
  return (
    <MapContainer center={[60.17, 24.94]} zoom={7} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {trainData.map((train, index) => (
        <Marker 
          key={index} 
          position={[train.coordinates[1], train.coordinates[0]]} 
          icon={trainIcon} 
        >
          <Popup>
            <div className="popup-content">
              <h3>🚆 Train {train.trainNumber}</h3>
              <p><b>Type:</b> {train.type}</p>
              <p><b>Speed:</b> {train.speed} km/h</p>
              <p><b>Route:</b> {train.origin} → {train.destination}</p>
              <p><b>Delay:</b> {train.delay}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
