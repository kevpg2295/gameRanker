import React from "react";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <li>
        <Link to="/user/home">Home</Link>
      </li>
      <li>
        <Link to="/user/rankings">Rankings</Link>
      </li>
    </div>
  );
};

export default NavbarUser;
