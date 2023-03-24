import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import Footer from './Footer';

const Layout = () => {
  const shouldShowFooterHeader =
    window.location.pathname === '/about' ||
    window.location.pathname === '/' ||
    window.location.pathname === '/recycle';
  return (
    <div className="wrapper" data-testid="wrapper">
      {shouldShowFooterHeader && <Header />}
      <Outlet />
      {shouldShowFooterHeader && <Footer />}
    </div>
  );
};

export { Layout };
