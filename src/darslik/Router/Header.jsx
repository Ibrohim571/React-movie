import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <nav className='navbarWrapper'>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/content">Sass</Link></li>
          <li><Link to="/order">Components</Link></li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Header;