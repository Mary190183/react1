import './assets/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Recycle } from './pages/recycle';
import { NotFoundPage } from './pages/404';
import { Home } from './pages/home';
import { Layout } from './components/Layout';

const AppRoutes = () => {
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

export default AppRoutes;
