const express = require('express');
const compression = require('compression');
const fs = require('fs');

import routes from './routes';

const PORT = 8080;

async function startServer() {
  let server = express();

  server.use(compression());
  server.use('/assets', express.static('assets'));

  routes(server);

  await new Promise(resolve => server.listen(PORT, resolve));

  console.log(`Server running on port ${PORT}`);
}

startServer();