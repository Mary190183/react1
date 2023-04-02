import './assets/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Recycle } from './pages/Recycle';
import { NotFoundPage } from './pages/404';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import React from 'react';

class AppRoutes extends React.Component {
  render = (): JSX.Element => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recycle" element={<Recycle />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  };
}
export default AppRoutes;
