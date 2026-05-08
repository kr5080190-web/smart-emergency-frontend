import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      <Navbar />

      <section className="hero">

        <h1>
          Smart Emergency Response
          <span> Coordination Platform</span>
        </h1>

        <p>
          Quick emergency assistance with GPS tracking,
          realtime alerts and responder coordination.
        </p>

        <div className="hero-buttons">

          <button onClick={() => navigate("/sos")}>
            Send SOS
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard
          </button>

        </div>

      </section>

      <section className="stats">

        <div className="card">
          <h2>120+</h2>
          <p>Emergency Alerts</p>
        </div>

        <div className="card">
          <h2>45</h2>
          <p>Responders Online</p>
        </div>

        <div className="card">
          <h2>3 min</h2>
          <p>Average Response</p>
        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>Realtime Alerts</h3>
          <p>
            Instantly notify emergency responders.
          </p>
        </div>

        <div className="feature-card">
          <h3>GPS Tracking</h3>
          <p>
            Accurate live location monitoring.
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast Response</h3>
          <p>
            Reduce emergency response time.
          </p>
        </div>

      </section>

      <footer className="footer">
        <p>
          Smart Emergency Response Coordination Platform © 2026
        </p>
      </footer>

    </div>
  );
}

export default Home;