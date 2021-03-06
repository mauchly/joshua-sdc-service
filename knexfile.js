require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: { user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_DATABASE, host: process.env.DB_HOST, port: process.env.DB_PORT },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: { user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_DATABASE },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  }
};