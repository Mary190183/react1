import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      This page doesn&apos;t exist. Go{' '}
      <Link to="/">
        <h1 className="logo">Houseplant</h1>
      </Link>
    </div>
  );
};
export { NotFoundPage };
