const Sequelize = require('sequelize');
const db = require('../util/database');

const unidades = db.define('unidades',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keydocumento: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keyusuarioor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keyusuariodest: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  fechaenvio: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fecharecepcion: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  observaciones: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contruta: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keyrutadocumento: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tiporuta: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  keyinstruccion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ruta2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  envio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = unidades;