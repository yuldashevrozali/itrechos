import Logo from "../../assets/Logo.png";
import "./index.css"
export default function Footer() {
  return (
    <footer className="footer-container">
    <div >
    <div className="nav-footer">
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
        <ul>
          <h4>Help</h4>
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions </li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <h4>Resources</h4>
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li>How to - Blog</li>
          <li>YouTube Playlist</li>
        </ul>
        <ul>
          <h4>Extra Links</h4>
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-info">
        <div className="">
          <span>Privacy Policy </span> <span>Terms & Conditions </span>     <span>Support</span>
        </div>
        <div className="">© Copyright 2024, All Rights Reserved by company</div>
      </div>
    </div>
    
    </footer>
  );
}
