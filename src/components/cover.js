import React from 'react';
import "./cover.css";
import video from "../Media/video.mp4";



const cover = () => {
  return (
    <div className="cover-container">
    <video className="video" src={video} autoPlay loop muted />
    <h1>David Chirinos</h1>
    <p>Trackingpremium|Almacén|Envíos|Facturación|Clientes|Casilleros</p>
    </div>

  )
}

export default cover