const { Sequelize, Model } = require('sequelize');

const bcryptjs = require('bcryptjs');

module.exports = class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 120],
              msg: 'O nome deve ter entre 3 e 120 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          unique: { msg: 'O e-mail já está sendo usado.' },
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Formato de e-mail inválido.',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha deve ter entre 6 e 50 caracteres.',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.password) {
        usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
      }
    });

    return this;
  }

  verifyPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
};
