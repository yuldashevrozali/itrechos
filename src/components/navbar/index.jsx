import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="home-header " id="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logotip" />
        </Link>
      </div>
      <div className="header-menu">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/concat">Contact</Link>
        <div className="header-span">
          <FaPhoneAlt />
          <p>+49 30 9846565</p>
        </div>
      </div>
    </nav>
  );
}
