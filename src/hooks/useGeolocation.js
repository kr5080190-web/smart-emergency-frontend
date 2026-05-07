import { useState, useEffect } from 'react';

export function useGeolocation() {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    const success = (pos) => {
      setCoordinates({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      });
    };

    const fail = (err) => {
      setError(err.message);
    };

    const watchId = navigator.geolocation.watchPosition(success, fail, {
      enableHighAccuracy: true,
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { coordinates, error };
}