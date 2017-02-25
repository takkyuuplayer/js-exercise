import restify from 'restify';

const respond = (req, res, next) => {
  res.send(`hello ${req.params.name}`);
  next();
};

const server = restify.createServer();
server.get('/hello/:name', respond);

/* eslint-disable no-console */
server.listen(8080, () => console.log('%s listening at %s', server.name, server.url));
