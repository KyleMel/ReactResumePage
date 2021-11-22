import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="KylePicture.jpg" alt="Headshot"/>
        <ul id="nav-container">
          <button class="btn">About Me</button>
          <button class="btn">Interests</button>
          <button class="btn">Experience</button>
          <button class="btn">Current Employement</button>
          <button class="btn">Future Plans</button>
          <button class="btn">Fun Facts</button>
        </ul>
      </nav>
  );
}

export default Navbar;