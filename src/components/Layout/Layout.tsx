import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Footer from '../Footer/footer';
import React from 'react';

class Layout extends React.Component {
  render = (): JSX.Element => {
    const shouldShowFooterHeader =
      window.location.pathname === '/about' ||
      window.location.pathname === '/' ||
      window.location.pathname === '/recycle';
    return (
      <div role="wrapper">
        {shouldShowFooterHeader && <Header />}
        <Outlet />
        {shouldShowFooterHeader && <Footer />}
      </div>
    );
  };
}
export { Layout };
