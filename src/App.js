import React, { useState }from "react";
import ReactMapGL, {Marker} from "react-map-gl"
import * as parkData from "./data/skateboard-parks.json";
import './index.css';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    zoom: 10,
    width: "100vw",
    height: "100vh"
  })
  return (
    <div className="App">
      <ReactMapGL
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/wallace-a/ckn9vqev925hp17pg7zu5ea1j"
      onViewportChange={viewport =>{
        setViewport(viewport);
      }}
      >
        {/* iterate over park data */}
        {parkData.features.map((park) => (
          <Marker 
          key={park.attributes.PARK_ID}
          longitude={park.geometry.x}
          latitude={park.geometry.y}
          >
            <button class="marker-btn">
              <img src="/skateboarding.svg" alt="Skatepark Icon"/>
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
