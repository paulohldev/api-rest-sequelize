const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          nome: 'Seed 1',
          email: 'seed1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Seed 2',
          email: 'seed2@gmail.com',
          password_hash: await bcryptjs.hash('123dsfds456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Seed 3',
          email: 'seed3@gmail.com',
          password_hash: await bcryptjs.hash('12gkmfd3456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Seed 4',
          email: 'seed4@gmail.com',
          password_hash: await bcryptjs.hash('123456190mgfkd02', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
