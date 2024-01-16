'use client';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function MyMap(props) {
    const {zoom} = props; 
    const position = [51.505, -0.09];
    return <MapContainer zoom={5} center={position} scrollWheelZoom={false} className="h-[100vh]">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}