import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[26.1224, -80.13]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
      />
      <Marker position={[26.1224, -80.13]}>
        <Tooltip
          className="mapTooltip"
          direction="top"
          offset={[-15, -15]}
          opacity="1"
          permanent
        >
          <h3>Vintage Camera Stores</h3>
          <p>123 Camera St.</p>
          <p>Fort Lauderdale, FL 33309</p>
          <p>(954) 555-5555</p>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
