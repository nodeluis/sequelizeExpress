const Sequelize = require('sequelize');
const db = require('../util/database');

const documento = db.define('documento',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keytipodocumento: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keyusuarioev: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  asunto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fechacreacion: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fechaedicion: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  numdocumento: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cite: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  keydocumento: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  codunidad: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fechafinalizacion: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  numhojas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  keyusuarioevorigen: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});

module.exports = documento;