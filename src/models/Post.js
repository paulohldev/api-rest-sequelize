const { Sequelize, Model } = require('sequelize');

module.exports = class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        post_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [5, 100],
              msg: 'O título deve ter entre 5 e 100 caracteres',
            },
          },
        },
        post_description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
};
