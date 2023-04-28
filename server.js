import fs from 'fs/promises';
import path from 'path';
import Express from 'express';

import { fromNodeMiddleware, toNodeListener } from 'h3';
import { createServer as createViteServer } from 'vite';
import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server.js';
import { listen } from 'listhen';
import sirv from 'sirv';

const DEV_ENV = 'development';

const bootstrap = async () => {
  const app = Express();
  let vite;

  if (process.env.NODE_ENV === DEV_ENV) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(fromNodeMiddleware(vite.middlewares));
  } else {
    app.use(
      fromNodeMiddleware(
        sirv('dist/client', {
          gzip: true,
        })
      )
    );
  }

  app.use(
    '*',
    fromNodeMiddleware(async (req, res, next) => {
      const url = req.originalUrl;
      let template, render;

      try {
        if (process.env.NODE_ENV === DEV_ENV) {
          template = await fs.readFile(path.resolve('./index.html'), 'utf-8');

          template = await vite.transformIndexHtml(url, template);

          render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
        } else {
          template = await fs.readFile(path.resolve('dist/client/index.html'), 'utf-8');
          render = (await import('./dist/server/entry-server.js')).render;
        }

        const appHtml = await render({ path: url });
        const html = template.replace('<!--ssr-outlet-->', appHtml);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html').end(html);
      } catch (error) {
        vite.ssrFixStacktrace(error);
        next(error);
      }
    })
  );

  return { app };
};

bootstrap()
  .then(async ({ app }) => {
    await listen(toNodeListener(app), { port: 5127 });
  })
  .catch(console.error);

// "dev-pre": "concurrently \"npm run start\" \"npm run server\" \"npm run open\"",
// "start": "vite",
// "server": "json-server -w server/db.json -p 3001",
// "build-pre": "concurrently \"npm run prebuild\" \"npm run server\"",
// "open": "open http://localhost:5173/",
// "prebuild": "vite build & tsc",
// "preview": "vite preview",
// "test": "vitest --coverage",
// "lint": "eslint ./src/**/**/*.{ts,tsx}",
// "react": "react-devtools",
// "eject": "eject",
// "dev": "node server && npm run server",
// "build": "npm run build:client && npm run build:server && npm run server",
// "build:client": "vite build --outDir dist/client",
// "build:server": "vite build --ssr src/entry-server.tsx --outDir dist/server",
// "generate": "vite build --outDir dist/static && npm run build:server && node prerender && npm run server",
// "serve": "NODE_ENV=production node server",
// "debug": "node --inspect-brk server"
