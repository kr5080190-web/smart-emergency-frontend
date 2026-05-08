import Navbar from "../components/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";

function LiveMap() {
  return (
    <div>

      <Navbar />

      <h1 className="title">
        Live Emergency Map
      </h1>

      <div className="map-box">

        <div className="map-content">

          <FaMapMarkerAlt className="map-icon" />

          <h2>Live GPS Tracking</h2>

          <p>
            Emergency responders and users
            are tracked in realtime.
          </p>

        </div>

      </div>

    </div>
  );
}

export default LiveMap;