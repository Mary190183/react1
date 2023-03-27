import './assets/styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { About } from './pages/About';
import { Recycle } from './pages/Recycle';
import { NotFoundPage } from './pages/404';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recycle" element={<Recycle />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;