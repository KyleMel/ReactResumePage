import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src="KylePicture.jpg" alt="Headshot"/>
        <ul id="nav-container">
          <Link to ="/">
            <button class="btn">About Me</button>
          </Link>
          <Link to ="interests">
            <button class="btn">Interests</button>
          </Link>
          <Link to ="experience">
            <button class="btn">Experience</button>
          </Link>
          <Link to ="futureplans">
            <button class="btn">Future Plans</button>
          </Link>
          <Link to ="funfacts">
            <button class="btn">Fun Facts</button>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;