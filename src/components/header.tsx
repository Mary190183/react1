import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h1 className="logo">Houseplant</h1>
        </Link>
        <form action="" method="get">
          <input
            className="input-search"
            name="search"
            placeholder="Enter plant ..."
            type="search"
          ></input>
          <button className="button" type="submit">
            <div className="search-icon"></div>
          </button>
        </form>
        <Link to="/about">About</Link>
        <Link className="nav-cart" to="/cart">
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
