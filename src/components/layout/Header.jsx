import React from 'react';
import HeaderNavBar from './HeaderNavBar';

function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <HeaderNavBar />
        </div>
      </div>
    </header>
  )
}

export default Header