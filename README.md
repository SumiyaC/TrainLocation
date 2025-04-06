![Image](https://github.com/user-attachments/assets/93ffe941-1eb1-4a18-8628-565d5483b1aa)

# Train Location Tracker 🚆

## Overview
Train Tracker is a website that retrieves current train locations from the DigiTraffic API and displays them on a map UI. This project was developed as part of the RDI Student Assistant Preliminary Task.

## Features
✔ Get real-time train locations  
✔ Display locations on **interactive map**  
✔ Auto-update every 30 sec  
✔ Train details on click  
✔ Metadata (Train Type, Origin/Destination, Speed, Delay Info)  

## Technologies Used
- **Frontend**: React, Leaflet
- **Backend**: Node.js, Express
- **API**: DigiTraffic API

## Setup Instructions

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/train-tracker.git
    cd train-tracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the server**:
    ```bash
   node server.js
    ```
    
4. **Start the application**:
    ```bash
   npm start
    ```

## API Used
- **DigiTraffic API**: Provides real-time train location data and metadata-https://www.digitraffic.fi/en/railway-traffic/

