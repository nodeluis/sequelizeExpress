const Sequelize = require('sequelize');
const db = require('../util/database');

const usuarioev = db.define('usuarioev',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keyempleado: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  login: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keyusuarioexterno: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  keyusuarioev: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  cite2: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

module.exports = usuarioev;