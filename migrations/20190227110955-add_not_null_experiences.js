'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Experiences',
        'service_name',
        {
          type: Sequelize.STRING,
          allowNull: false
        }),
      queryInterface.changeColumn(
        'Experiences',
        'review',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.changeColumn(
        'Experiences',
        'reading_level',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ]
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.changeColumn(
        'Experiences',
        'service_name',
        {
          type: Sequelize.STRING,
          allowNull: true
        }),
      queryInterface.changeColumn(
        'Experiences',
        'review',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.changeColumn(
        'Experiences',
        'reading_level',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      )
    ])

  }
};
