const { Pool } = require('pg');

const pool = new Pool({
      user: 'postgres',
      database: 'pernyt_db',
      host: 'localhost',
      port: '5432',
      password: '9090'
});

module.exports = pool;