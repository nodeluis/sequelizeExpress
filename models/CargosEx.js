const Sequelize = require('sequelize');
const db = require('../util/database');

const CargosEx = db.define('cargosex',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keycargoex: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nombrecargo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  designcolor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = CargosEx;