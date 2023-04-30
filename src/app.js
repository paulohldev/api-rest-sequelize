const express = require('express');

require('./database/index');

const usuarioRoutes = require('./routes/usuarioRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/usuario/', usuarioRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

module.exports = new App().app;
