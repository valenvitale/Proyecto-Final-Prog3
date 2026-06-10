const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Videojuego = sequelize.define('Videojuego', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING
  },
  plataforma: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.ENUM(
      'pendiente',
      'jugando',
      'completado'
    ),
    defaultValue: 'pendiente'
  },
  calificacion: {
    type: DataTypes.INTEGER
  },
  horasJugadas: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Videojuego;