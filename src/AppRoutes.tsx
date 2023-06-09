import './assets/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/about/about';
import { Recycle } from './pages/recycle/recycle';
import { NotFoundPage } from './pages/404/404';
import { Home } from './pages/home/home';
import { Layout } from './components/Layout/Layout';
import React from 'react';

export const AppRoutes = () => {
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
