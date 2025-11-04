import React from 'react';
import { Link } from "react-router-dom";
import './navButton.css';

const NavButton = ({ to, name }) => {
  return (
    <div className="navButton-div">
      <Link className="nav-button" to={to}>
        {name}
      </Link>
    </div>
  );
};

export default NavButton;