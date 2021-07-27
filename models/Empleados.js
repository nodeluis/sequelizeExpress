const Sequelize = require('sequelize');
const db = require('../util/database');

const empleados = db.define('empleados',{
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
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  materno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paterno: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ci: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lmilitar: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  celular: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fnac: {
    type: Sequelize.DATE,
    allowNull: false
  },
  lnac: {
    type: Sequelize.STRING,
    allowNull: false
  },
  direc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zona: {
    type: Sequelize.STRING,
    allowNull: false
  },
  idgrado: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tdomicilio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ecivil: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fingreso: {
    type: Sequelize.DATE,
    allowNull: false
  },
  notas: {
    type: Sequelize.STRING,
    allowNull: false
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false
  },
  e_mail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ncuenta: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nit: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = empleados;
