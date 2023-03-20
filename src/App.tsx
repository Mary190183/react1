import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { NotFoundPage } from './pages/404';
import { Home } from './pages/home';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
