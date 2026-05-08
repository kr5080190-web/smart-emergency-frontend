import Navbar from "../components/Navbar";
import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SOS() {

  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("");

  function sendSOS() {

    setLoading(true);

    toast.info("Fetching GPS location...");

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLocation(
          `Latitude: ${lat}
          Longitude: ${lng}`
        );

        setLoading(false);

        toast.success(
          "Emergency Alert Sent Successfully"
        );
      },

      () => {

        setLoading(false);

        toast.error(
          "Location Permission Denied"
        );
      }

    );
  }

  return (
    <div>

      <Navbar />

      <ToastContainer />

      <div className="sos-page">

        <h1>Emergency SOS</h1>

        <div className="types">

          <button>Medical</button>
          <button>Fire</button>
          <button>Crime</button>
          <button>Accident</button>

        </div>

        <button
          className="sos-btn"
          onClick={sendSOS}
        >

          {loading ? "..." : "SOS"}

        </button>

        <p className="sos-message">
          {location}
        </p>

      </div>

    </div>
  );
}

export default SOS;