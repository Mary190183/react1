import { StaticRouter } from 'react-router-dom/server';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { AppRoutes } from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';

export const render = (url: string, options: RenderToPipeableStreamOptions) => {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </Provider>,
    options
  );
  const preloadedState = store.getState();
  return { stream, preloadedState };
};
