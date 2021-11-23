import React from "react";
import {Link} from "react-router-dom";
import "animate.css";

const Navbar = () => {
  return (
    <nav>
      <img src="KylePicture.jpg" alt="Headshot"/>
        <ul id="nav-container">
          <Link style={{ textDecoration: 'none' }} to ="/">
            <button class="btn">About Me</button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to ="interests">
            <button class="btn">Interests</button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to ="experience">
            <button class="btn">Experience</button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to ="futureplans">
            <button class="btn">Future Plans</button>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;