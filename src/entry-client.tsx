import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App/App';

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
