const Sequelize = require('sequelize');
const db = require('../util/database');

const archivoadjunto = db.define('archivoadjunto',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  keydocumento: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = archivoadjunto;