import ReactDOM, { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
hydrateRoot(document.getElementById('root') as HTMLElement, <App data-testid="App" />);
console.log('hydrated');
