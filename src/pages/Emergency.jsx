import React, { useState } from 'react';
import PanicButton from '../components/PanicButton';
import EmergencyMap from '../components/EmergencyMap';
import { useGeolocation } from '../hooks/useGeolocation';

function Emergency() {
  const [alertSent, setAlertSent] = useState(false);
  const { coordinates } = useGeolocation();

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {!alertSent ? (
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">
            Emergency SOS
          </h1>

          <PanicButton onAlert={() => setAlertSent(true)} />

          <p className="mt-5 text-gray-400">
            Hold for 3 seconds to confirm alert
          </p>
        </div>
      ) : (
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl text-green-400 font-bold mb-4">
            Help is on the way!
          </h1>

          <p className="text-gray-300 mb-5">
            Stay calm and remain visible.
          </p>

          <EmergencyMap userLocation={coordinates} />
        </div>
      )}
    </div>
  );
}

export default Emergency;