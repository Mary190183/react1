import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      This page doesn&apos;t exist. Go <Link to="/">Home</Link>
    </div>
  );
};
export { NotFoundPage };
