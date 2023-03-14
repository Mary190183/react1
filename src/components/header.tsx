import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h1 className="logo">Houseplant</h1>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
