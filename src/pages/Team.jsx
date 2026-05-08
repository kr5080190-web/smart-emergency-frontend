import Navbar from "../components/Navbar";

function Team() {
  return (
    <div>

      <Navbar />

      <h1 className="title">
        Project Team
      </h1>

      <div className="team-grid">

        <div className="team-card">
          <h3>G. Lakshmi</h3>
          <p>24011M2116</p>
        </div>

        <div className="team-card">
          <h3>K. Sri Harshini</h3>
          <p>24011M2202</p>
        </div>

        <div className="team-card">
          <h3>M. Sri Bhuvana</h3>
          <p>24011MB501</p>
        </div>

        <div className="team-card">
          <h3>K. Archana</h3>
          <p>24011MB508</p>
        </div>

      </div>

    </div>
  );
}

export default Team;