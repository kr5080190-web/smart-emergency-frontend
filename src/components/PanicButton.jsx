import React, { useState } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { emergencyService } from '../services/api';

function PanicButton({ onAlert }) {
  const { coordinates, error } = useGeolocation();
  const [isPressed, setIsPressed] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handlePress = () => {
    setIsPressed(true);

    let count = 3;
    setCountdown(count);

    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);

      if (count === 0) {
        clearInterval(timer);
        triggerEmergency();
      }
    }, 1000);
  };

  const handleCancel = () => {
    setIsPressed(false);
    setCountdown(null);
  };

  const triggerEmergency = async () => {
    if (!coordinates) {
      alert('Enable GPS location');
      return;
    }

    console.log('Emergency Alert Sent'); 
    onAlert();
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {!isPressed ? (
        <button
          onClick={handlePress}
          className="bg-red-600 text-white rounded-full w-40 h-40 text-4xl font-bold shadow-lg hover:bg-red-700 active:scale-95"
        >
          SOS
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white text-5xl rounded-full w-40 h-40 flex items-center justify-center animate-pulse">
            {countdown}
          </div>

          <button
            onClick={handleCancel}
            className="mt-4 bg-gray-700 px-4 py-2 rounded text-white"
          >
            Cancel
          </button>
        </div>
      )}

      {error && <p className="text-red-400 mt-3">{error}</p>}
    </div>
  );
}

export default PanicButton;