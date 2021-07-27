const Sequelize = require('sequelize');
const db = require('../util/database');

const unidades = db.define('unidades',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keyunidad: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unidad: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  keyunidad_dep: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nivel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  codunidad: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = unidades;