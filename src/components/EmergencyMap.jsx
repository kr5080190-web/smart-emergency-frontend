import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function EmergencyMap({ userLocation }) {
  useEffect(() => {
    if (!userLocation) return;

    const map = L.map('map').setView(
      [userLocation.latitude, userLocation.longitude],
      13
    );

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors',
      }
    ).addTo(map);

    L.marker([
      userLocation.latitude,
      userLocation.longitude,
    ]).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => map.remove();
  }, [userLocation]);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '100%',
        marginTop: '20px',
      }}
    ></div>
  );
}

export default EmergencyMap;