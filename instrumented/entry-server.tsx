import { StaticRouter } from 'react-router-dom/server';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { AppRoutes } from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';

export const render = (url: string, options: RenderToPipeableStreamOptions) => {
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
  const preloadedState = store.getState();
  return { stream, preloadedState };
};
