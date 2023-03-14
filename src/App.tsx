import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { NotFoundPage } from './pages/404';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import React from 'react';

const Header = React.lazy(() => import('./components/header'));
const Footer = React.lazy(() => import('./components/footer'));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
