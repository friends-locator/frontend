import * as React from 'react';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './TrackingMap.css';
import { Icon } from "leaflet";
import avatar from '../../images/avatarwoman.png';
import { friendsLocation } from "./friendsLocation"; // TODO делать запрос к серверу для получения списка друзей, брать их координаты

const position = [55.729348, 37.560709]; //  TODO стартовые координаты пользователя брать из контекст провайдера?
const userIcon = new Icon({ //  TODO аватарку брать из компонента, который отвечает за аватар пользователя в Profile?
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
        {friendsLocation.map(friend => {
          console.log(friend.avatar);
          return (
            <Marker
              key={friend.id}
              position={friend.position}
              icon={new Icon({
                iconUrl: friend.avatar,
                iconSize: [40, 48]
              })}
            />
          );
        })}
      </MapContainer>
  );
}
