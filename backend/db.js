const { Client } = require('pg');

// Create a new instance of the client
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'vacationio',
  port: 5432,
});

module.exports = client;
