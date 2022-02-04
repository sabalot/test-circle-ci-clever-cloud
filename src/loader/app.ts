import express, { Express } from 'express';

export default (): Express => {
  const app = express();

  app.get('/hello', (_req, res) => {
    res.send('hello world');
  });

  return app;
};
