import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { AppRoutes } from './AppRoutes';

ReactDOM.hydrateRoot(
  document.querySelector('#root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);
