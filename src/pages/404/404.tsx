import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container_404 container">
      This page doesn&apos;t exist. Go
      <NavLink to="/">
        <h1 className="logo">Houseplants</h1>
      </NavLink>
    </div>
  );
};
export { NotFoundPage };
