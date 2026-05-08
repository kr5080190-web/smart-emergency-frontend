import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">SERCP</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sos">SOS</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/map">Map</Link>
        <Link to="/architecture">Architecture</Link>
        <Link to="/team">Team</Link>
      </div>

    </nav>
  );
}

export default Navbar;