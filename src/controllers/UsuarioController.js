const Usuario = require('../models/Usuario');

class UsuarioController {
  async index(req, res) {
    try {
      const findAll = await Usuario.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      res.status(200).json(findAll);
    } catch (e) {
      res.json(e);
    }
  }

  async store(req, res) {
    try {
      const { nome, email, password } = req.body;
      if (!nome || !email || !password) {
        return res
          .status(400)
          .json({ message: ['Todos os campos são obrigatórios.'] });
      }

      const novoUsuario = await Usuario.create({ nome, email, password });
      return res.status(200).json(novoUsuario);
    } catch (e) {
      return res
        .status(400)
        .json({ message: e.errors.map((error) => error.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: ['ID inválido.'] });
      }

      const findOne = await Usuario.findByPk(id);

      if (!findOne) {
        return res.status(400).json({ message: ['Usuário não existe.'] });
      }

      return res.status(200).json(findOne);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const findOne = await Usuario.findByPk(req.userId);

      if (!findOne) {
        return res.status(400).json({ message: ['Usuário não existe.'] });
      }
      const novosDados = await findOne.update(req.body);
      const { id, nome, email } = novosDados;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async delete(req, res) {
    try {
      const findOne = await Usuario.findByPk(req.userId);

      if (!findOne) {
        return res.status(400).json({ message: ['Usuário não existe.'] });
      }

      await findOne.destroy();
      return res
        .status(200)
        .json({ message: ['Usuário deletado com sucesso.'] });
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

module.exports = new UsuarioController();
