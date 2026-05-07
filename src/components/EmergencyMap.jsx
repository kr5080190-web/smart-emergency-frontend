import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function EmergencyMap({ userLocation }) {
  useEffect(() => {
    if (!userLocation) return;

    const map = L.map('map').setView(
      [userLocation.latitude, userLocation.longitude],
      13
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([
      userLocation.latitude,
      userLocation.longitude,
    ])
      .addTo(map)
      .bindPopup('You are here')
      .openPopup();

    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      map.remove();
    };
  }, [userLocation]);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '100%',
        borderRadius: '12px',
        marginTop: '20px',
      }}
    />
  );
}

export default EmergencyMap;