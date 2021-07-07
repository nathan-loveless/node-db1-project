const express = require('express');
const AccountsRouter = require('./data/accounts-router');
const server = express();
server.use(express.json());
server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
    res.send('<h3>DB 1 Relational Databases</h3>');
  });

module.exports = server;