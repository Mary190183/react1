import { NavLink } from 'react-router-dom';
import { Layout, g } from 'components/Layout';
import Footer from 'components/footer';

const NotFoundPage = () => {
  return (
    <div className="container_404 container">
      This page doesn&apos;t exist. Go
      <a href="/">
        <h1 className="logo">Houseplant</h1>
      </a>
    </div>
  );
};
export { NotFoundPage };
