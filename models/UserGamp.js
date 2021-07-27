const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keyempleado: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keyusuarioexterno: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
