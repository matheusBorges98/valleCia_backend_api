// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:"vallecia",
      user:"postgres",
      password:"root",
    },
    migrations:{
      tableName:('knex_migrations'),
      directory:'/valleCia_node/source/database/migrations'
    },
    seeds:{
      directory:'/valleCia_node/source/database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
