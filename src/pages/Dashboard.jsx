import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Dashboard() {

  const [alerts, setAlerts] = useState([
    {
      type: "Medical Emergency",
      place: "Hyderabad",
      status: "Active"
    }
  ]);

  useEffect(() => {

    const interval = setInterval(() => {

      const demoAlerts = [
        "Fire Emergency",
        "Road Accident",
        "Crime Alert",
        "Medical Emergency"
      ];

      const locations = [
        "Warangal",
        "Karimnagar",
        "Nizamabad",
        "Hyderabad"
      ];

      const randomAlert =
        demoAlerts[
          Math.floor(Math.random() * demoAlerts.length)
        ];

      const randomLocation =
        locations[
          Math.floor(Math.random() * locations.length)
        ];

      setAlerts((prev) => [
        {
          type: randomAlert,
          place: randomLocation,
          status: "Active"
        },
        ...prev
      ]);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>

      <Navbar />

      <h1 className="title">
        Emergency Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="card">
          <h2>{alerts.length}</h2>
          <p>Active Alerts</p>
        </div>

        <div className="card">
          <h2>28</h2>
          <p>Responders Online</p>
        </div>

        <div className="card">
          <h2>105</h2>
          <p>Resolved Cases</p>
        </div>

      </div>

      <div className="alerts">

        {alerts.map((alert, index) => (

          <div className="alert-card" key={index}>

            <h3>{alert.type}</h3>

            <p>{alert.place}</p>

            <span>{alert.status}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;