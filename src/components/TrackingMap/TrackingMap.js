import * as React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './TrackingMap.css';
import { Icon } from "leaflet";
import avatar from '../../images/avatarwoman.png';

const position = [55.729348, 37.560709]; //  TODO стартовые координаты брать из геолокации пользователя
const userIcon = new Icon({ //  TODO аватарку брать из личного кабинета пользователя
  iconUrl: avatar,
  iconSize: [40, 48],
})

export default function TrackingMap() {
  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={userIcon} />
      </MapContainer>
  );
}
