// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";



// // Define custom train icon
// const trainIcon = L.icon({
//   iconUrl: "/images/trainLogo.jpg",  // 🚆 Path to your train image
//   iconSize: [30, 30],  // Adjust size if needed
//   iconAnchor: [15, 25],  // Centers the icon properly
//   popupAnchor: [0, -25],  // Positions popup correctly
// });

// const Map = ({ trainData }) => {
//   return (
//     <MapContainer center={[60.17, 24.94]} zoom={7} style={{ height: "100vh" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//       {trainData.map((train, index) => (
//         <Marker 
//           key={index} 
//           position={[train.coordinates[1], train.coordinates[0]]} 
//           icon={trainIcon}  // 🚆 Replacing default marker with train logo
//         >
//           <Popup>
//             <b>Train {train.trainNumber}</b> <br />
//             Type: {train.type} <br />
//             Speed: {train.speed} km/h <br />
//             From: {train.origin} → {train.destination} <br />
//             Delay: {train.delay}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles.css";  // ✅ Ensures styles are applied properly

// Define custom train icon
const trainIcon = L.icon({
  iconUrl: "/images/trainLogo.jpg",  // ✅ Make sure this file exists
  iconSize: [30, 30],  // Adjust size if needed
  iconAnchor: [15, 25],  // Centers the icon properly
  popupAnchor: [0, -25],  // Positions popup correctly
});

const Map = ({ trainData }) => {
  return (
    <MapContainer center={[60.17, 24.94]} zoom={7} style={{ height: "100vh" }}>
      {/* ✅ Simple, clean tile layer */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* ✅ Loop through train data and display markers */}
      {trainData.map((train, index) => (
        <Marker 
          key={index} 
          position={[train.coordinates[1], train.coordinates[0]]} 
          icon={trainIcon}  // 🚆 Using the custom train icon
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
