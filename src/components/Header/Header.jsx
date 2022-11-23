import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div>Ristorante theKano delicatessen
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/ReserveForm">Reserve Form</Link>
        </span>
        </div>
      </nav>
    </header>
  )
}

export default Header

