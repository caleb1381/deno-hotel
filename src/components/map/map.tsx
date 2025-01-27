"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

const OpenStreetMap = () => {
  const position: LatLngExpression | LatLngTuple = [
    10.306027061890882, 9.840329435898656,
  ];
  return (
    <MapContainer
      center={position}
      zoom={18}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker position={position}>
        <Popup>Deno Hotels and Apartment, New GRA, Bauchi.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;
