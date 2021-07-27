const Sequelize = require('sequelize');
const db = require('../util/database');

const controlinterno = db.define('controlinterno',{
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
  codempleado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  item: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numproyecto: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  keyunidad: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  keycargo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  keysalario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fechac: {
    type: Sequelize.DATE,
    allowNull: false
  },
  razon: {
    type: Sequelize.STRING,
    allowNull: false
  },
  detalle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fechainicio: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fechaconclusion: {
    type: Sequelize.DATE,
    allowNull: false
  },
  keybloqueo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  trabsabado: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fecha_conclusion_contrato: {
    type: Sequelize.DATE,
    allowNull: false
  },
  keyedificio: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  keyedificio2: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tipoafiliacion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  keyhorario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  lastupdate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  keytipoempleado: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tiquea: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  keyproyecto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  keyusuariolastupdatedby: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

});

module.exports = controlinterno;
