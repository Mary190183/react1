import { NavLink } from 'react-router-dom';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container" role="input">
        <Link className={({ isActive }) => (isActive ? 'active-link' : 'default-link')} href="/">
          <img src="/logo.svg" alt="logo" />
          <h1 className="logo">Houseplants</h1>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          href="/about"
        >
          About us
        </Link>
        <Link
          className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
          href="/recycle"
        >
          Recycle
        </Link>
      </div>
    </header>
  );
};

export { Header };
