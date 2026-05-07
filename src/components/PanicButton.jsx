import React, { useState, useEffect, useCallback, useRef } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

function PanicButton({ onAlert }) {
  const { coordinates, error } = useGeolocation();

  const [state, setState] = useState("idle"); // idle | counting | sent
  const [countdown, setCountdown] = useState(3);

  // 🚨 prevents double execution (IMPORTANT FIX)
  const hasSentRef = useRef(false);

  // =========================
  // EMERGENCY FUNCTION (RUNS ONCE)
  // =========================
  const sendEmergency = useCallback(() => {
    if (hasSentRef.current) return;
    hasSentRef.current = true;

    if (!coordinates) {
      alert("Enable GPS location");
      setState("idle");
      hasSentRef.current = false;
      return;
    }

    const { latitude, longitude } = coordinates;

    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const message = `🚨 EMERGENCY ALERT!\n\nMy live location:\n${mapLink}\n\nPlease help ASAP!`;

    // backup copy
    navigator.clipboard.writeText(message);

    // ✅ ONLY ONE WhatsApp OPEN (NO DUPLICATES)
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setState("sent");

    if (onAlert) {
      onAlert({ latitude, longitude, mapLink });
    }

    // reset after 3 seconds
    setTimeout(() => {
      setState("idle");
      setCountdown(3);
      hasSentRef.current = false;
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
  // HANDLERS
  // =========================
  const handlePress = () => {
    setState("counting");
  };

  const handleCancel = () => {
    setState("idle");
    setCountdown(3);
    hasSentRef.current = false;
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

      {/* SENT STATE */}
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