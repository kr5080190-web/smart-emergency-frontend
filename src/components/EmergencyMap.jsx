import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function EmergencyMap({ userLocation }) {
  useEffect(() => {
    if (!userLocation) return;

    const map = L.map('map').setView(
      [userLocation.latitude, userLocation.longitude],
      14
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);

    L.marker([userLocation.latitude, userLocation.longitude])
      .addTo(map)
      .bindPopup('You are here')
      .openPopup();

    return () => map.remove();
  }, [userLocation]);

  return (
    <div
      id="map"
      className="h-96 w-full rounded-lg shadow-lg mt-5"
    />
  );
}

export default EmergencyMap;