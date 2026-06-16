// backend/models/index.js
const { Sequelize } = require('sequelize');
const config = require('../config/database');
const Videojuego = require('./videojuego.model');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions
  }
);

const verificarConexion = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Conexión exitosa a las tablas en: ${dbConfig.host}`);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
};
verifficarConexion();

const UserModel = require('./User');
const User = UserModel(sequelize);

module.exports = {
  sequelize,
  Sequelize,
  verificarConexion,
  User,
  Videojuego
};