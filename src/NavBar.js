import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/coke">Coke</Link>
        <Link to="/sprite">Sprite</Link>
        <Link to="/pretzels">Pretzels</Link>
      </nav>
    </>
  );
}

export default NavBar;
