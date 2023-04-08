import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container" role="input">
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'default-link')} to="/">
          <img src="/logo.svg" alt="logo" />
          <h1 className="logo">Houseplants</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          to="/recycle"
        >
          Recycle
        </NavLink>
      </div>
    </header>
  );
};

export { Header };
