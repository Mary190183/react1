import { NavLink, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import Footer from './footer';

const Layout = () => {
  const shouldShowFooterHeader =
    window.location.pathname === '/about' || window.location.pathname === '/';
  return (
    <>
      {shouldShowFooterHeader && (
        <header className="header">
          <div className="header-container">
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
              to=""
            >
              <h1 className="logo">Houseplant</h1>
            </NavLink>
            <SearchBar />
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
              to="about"
            >
              About us
            </NavLink>
          </div>
        </header>
      )}
      <Outlet />
      {shouldShowFooterHeader && <Footer />}
    </>
  );
};

export { Layout };
