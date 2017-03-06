import express from 'express';

const respond = (req, res, next) => {
  res.send(`hello ${req.params.name}`);
  next();
};

const server = express();
server.get('/hello/:name', respond);

/* eslint-disable no-console */
server.listen(8080, () => console.log('ready!'));
