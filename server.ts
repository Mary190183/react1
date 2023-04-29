import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer, ViteDevServer } from 'vite';
import cookieParser from 'cookie-parser';
import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server.js';
import { RootState } from './src/store/index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5112;
const isProd = process.env.NODE_ENV === 'production';

const createNodeServer = async () => {
  const app = express();

  let vite: ViteDevServer;

  if (!isProd) {
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      '/assets',
      (await import('serve-static')).default(path.resolve(__dirname, 'dist/client/assets'), {
        index: false,
      })
    );
  }

  app.use(cookieParser());
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;
      let render: (
        url: string,
        options: RenderToPipeableStreamOptions
      ) => {
        stream: PipeableStream;
        preloadedState: RootState;
      };

      if (isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        const entryPath = './dist/server/entry-server.js';
        render = (await import(entryPath)).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      }

      const parts = template.split(`<!--app-html-->`);
      const queryResult = req.cookies.search;

      const rendered = render(url, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
        },
        onAllReady() {
          const { preloadedState } = rendered;
          const preloadedStateTemplate = `<script>
            window.__PRELOADED_STATE__ = ${JSON.stringify({
              ...preloadedState,
              cards: { ...preloadedState.cards, queryResult },
            }).replace(/</g, '\\u003c')}
          </script>`;
          res.write(parts[1].replace(`<!--preloaded-state-->`, preloadedStateTemplate ?? ''));
          res.end();
        },
        onError(err) {
          console.error(err);
        },
      });

      const { pipe } = rendered.stream;
    } catch (e) {
      const err = e as Error;
      vite?.ssrFixStacktrace(err);
      next(err);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
};

createNodeServer();
