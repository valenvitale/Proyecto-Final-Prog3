// config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PGUSER || process.env.DB_USER || 'app_user',
    password: process.env.PGPASSWORD || process.env.DB_PASSWORD || 'app_password',
    database: process.env.PGDATABASE || process.env.DB_NAME || 'app_database',
    host: process.env.PGHOST || process.env.DB_HOST || 'localhost',
    port: process.env.PGPORT || process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: process.env.PGUSER || process.env.DB_USER || 'app_user',
    password: process.env.PGPASSWORD || process.env.DB_PASSWORD || 'app_password',
    database: process.env.PGDATABASE || process.env.DB_NAME + '_test' || 'app_database_test',
    host: process.env.PGHOST || process.env.DB_HOST || 'localhost',
    port: process.env.PGPORT || process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 10,
      min: 2,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};