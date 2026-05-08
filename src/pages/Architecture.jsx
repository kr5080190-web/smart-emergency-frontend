import Navbar from "../components/Navbar";

function Architecture() {
  return (
    <div>

      <Navbar />

      <h1 className="title">
        Project Architecture
      </h1>

      <div className="architecture">

        <div className="card">
          <h2>Frontend</h2>
          <p>HTML, CSS, JavaScript, React.js</p>
        </div>

        <div className="card">
          <h2>Backend</h2>
          <p>Node.js, Django</p>
        </div>

        <div className="card">
          <h2>Database</h2>
          <p>MongoDB, Firebase</p>
        </div>

        <div className="card">
          <h2>APIs</h2>
          <p>Google Maps API, GPS API, Twilio API</p>
        </div>

      </div>

    </div>
  );
}

export default Architecture;