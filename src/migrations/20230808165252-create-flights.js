'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING
      },
      airplaneId: {
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        type: Sequelize.INTEGER
      },
      arrivalAirPortId: {
        type: Sequelize.INTEGER
      },
      arrivalTime: {
        type: Sequelize.DATE
      },
      departureTime: {
        type: Sequelize.DATE
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      totalSeat: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};