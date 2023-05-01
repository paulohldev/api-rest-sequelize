const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: ['Todos os campos são obrigatórios.'],
        });
      }

      const user = await Usuario.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({
          message: ['Usuário não existe.'],
        });
      }

      if (!(await user.isPasswordValid(password))) {
        return res.status(401).json({
          message: ['Credenciais inválidas.'],
        });
      }

      const { id } = user;

      const token = await jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json({ token });
    } catch (e) {
      return res.send(null);
    }
  }
}

module.exports = new TokenController();
