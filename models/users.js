const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('users1',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nombres: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  paterno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  materno: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ci: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  unidad: {
    type: Sequelize.STRING,
    allowNull: false
  },
  institucion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fecharecepcion: {
    type: Sequelize.DATE,
    allowNull: false
  },
  observaciones: {
    type: Sequelize.STRING,
    allowNull: false
  },

});

module.exports = User;