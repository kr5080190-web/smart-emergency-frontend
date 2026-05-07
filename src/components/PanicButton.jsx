import React, { useState, useEffect, useCallback } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

function PanicButton({ onAlert }) {
  const { coordinates, error } = useGeolocation();

  const [state, setState] = useState("idle"); // idle | counting | sent
  const [countdown, setCountdown] = useState(3);

  // =========================
  // EMERGENCY FUNCTION
  // =========================
  const sendEmergency = useCallback(() => {
    if (!coordinates) {
      alert("GPS still loading. Wait 2–3 seconds and try again.");
      return;
    }

    const { latitude, longitude } = coordinates;

    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const message = `🚨 EMERGENCY ALERT!\n\nMy live location:\n${mapLink}\n\nPlease help ASAP!`;

    // backup copy
    navigator.clipboard.writeText(message);

    // OPEN WHATSAPP (reliable method)
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setState("sent");

    if (onAlert) {
      onAlert({ latitude, longitude, mapLink });
    }

    setTimeout(() => {
      setState("idle");
      setCountdown(3);
    }, 3000);
  }, [coordinates, onAlert]);

  // =========================
  // COUNTDOWN FLOW
  // =========================
  useEffect(() => {
    let timer;

    if (state === "counting") {
      let count = 3;
      setCountdown(count);

      timer = setInterval(() => {
        count -= 1;
        setCountdown(count);

        if (count === 0) {
          clearInterval(timer);
          sendEmergency();
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [state, sendEmergency]);

  // =========================
  // BUTTON CLICK
  // =========================
  const handlePress = () => {
    if (!coordinates) {
      alert("Fetching GPS location... Please wait 2–3 seconds and try again.");
      return;
    }

    setState("counting");
  };

  const handleCancel = () => {
    setState("idle");
    setCountdown(3);
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="flex flex-col items-center mt-10">

      {/* SOS BUTTON */}
      {state === "idle" && (
        <button
          onClick={handlePress}
          className="bg-red-600 text-white rounded-full w-40 h-40 text-4xl font-bold shadow-lg hover:bg-red-700 active:scale-95"
        >
          SOS
        </button>
      )}

      {/* COUNTDOWN */}
      {state === "counting" && (
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

          <p className="text-sm text-gray-400 mt-2">
            Hold for 3 seconds to confirm alert
          </p>

        </div>
      )}

      {/* SENT */}
      {state === "sent" && (
        <div className="text-center">
          <div className="text-green-500 font-bold text-xl">
            🚨 Emergency Sent
          </div>
          <p className="text-gray-400 text-sm">
            Help is being notified
          </p>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-red-400 mt-3">{error}</p>
      )}

    </div>
  );
}

export default PanicButton;