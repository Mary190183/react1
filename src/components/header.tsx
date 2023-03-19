import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h1 className="logo">Houseplant</h1>
        </Link>
        <SearchBar />
        <Link to="/about">About us</Link>
      </div>
    </header>
  );
};

export default Header;
