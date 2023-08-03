// Map.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '600px',
  height: '400px',
  margin: '0 auto',
};

const MapContainer = (props) => {
  const { google } = props;

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.774929,
        lng: -122.419418,
      }}
    >
      <Marker position={{ lat: 35.8942374, lng: 10.5634208}} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDYnOYm-htx1mdZGoJmNSbyQZ4knGcUjlw',
})(MapContainer);
