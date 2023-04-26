const Usuario = require('../models/Usuario');

class UsuarioController {
  async index(req, res) {
    try {
      const findAll = await Usuario.findAll();
      res.status(200).json(findAll);
    } catch (e) {
      res.json(e);
    }
  }

  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      res.status(200).json(novoUsuario);
    } catch (e) {
      res.status(400).json(e.errors.map((error) => error.message));
    }
  }
}

module.exports = new UsuarioController();
