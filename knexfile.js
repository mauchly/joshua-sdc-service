module.exports = {
  development: {
    client: 'pg',
    connection: { user: 'postgres', password: 'postgres', database: 'recommendations' },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: { user: 'postgres', password: 'postgres', database: 'recommendations' },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  }
};