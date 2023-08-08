'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'planeModel1',
      capacity: 206,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'planeModel2',
      capacity: 600,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'planeModel3',
      capacity: 400,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'planeModel4',
      capacity: 600,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'planeModel5',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
