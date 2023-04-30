const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: ['Todos os campos são obrigatórios.'] });
      }

      const user = await Usuario.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: ['E-mail não cadastrado.'] });
      }

      if (!(await user.verifyPassword(password))) {
        return res.status(401).json({ message: ['Senha inválida.'] });
      }

      const { id } = user;

      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json({ token });
    } catch (e) {
      return res.status(400).json({ message: ['Teste'] });
    }
  }
}

module.exports = new TokenController();
