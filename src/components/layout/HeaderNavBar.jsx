import React from 'react';
import HeaderCart from './HeaderCart';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderSearchButton from './HeaderSearchButton';
import HeaderSearchForm from './HeaderSearchForm';

function HeaderNavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <HeaderLogo />
      <div className="collapase navbar-collapse" id="navbarMain">
        <HeaderMenu />
        <div>
          <div className="header-controls-pics">
            <HeaderSearchButton />
            <HeaderCart />
          </div>
          <HeaderSearchForm />
        </div>
      </div>
    </nav>
  )
}

export default HeaderNavBar