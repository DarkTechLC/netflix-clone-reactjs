import React from 'react';

import './Header.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={logo} alt="Logotipo" />
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img src={avatar} alt="Avatar" />
        </a>
      </div>
    </header>
  );
}