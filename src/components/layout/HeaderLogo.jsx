import React from 'react';
import logo from '../../img/header-logo.png';
import { Link } from 'react-router-dom';

function HeaderLogo() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Bosa Noga" />
    </Link>
  )
}

export default HeaderLogo