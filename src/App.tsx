import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { About } from './pages/about';
import { NotFoundPage } from './pages/404';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
