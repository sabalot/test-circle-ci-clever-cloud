import express, { Express } from 'express';
import { addition } from '../utils/maths.utils';

export default (): Express => {
  const app = express();

  app.get('/hello', (_req, res) => {
    const result = addition(5, 7);
    res.send(`hello world ${result}`);
  });

  return app;
};
