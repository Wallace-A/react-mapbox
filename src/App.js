import React, { useState }from "react";
import './App.css';
import ReactMapGL from "react-map-gl"

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
      <ReactMapGL{...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
