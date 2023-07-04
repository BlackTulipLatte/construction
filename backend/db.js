const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'db-1.ctzk6yo38b2t.us-east-2.rds.amazonaws.com',
    database: 'dbinit',
    port: 5432,
})

pool.connect();

pool.query("INSERT INTO public.accounts VALUES (21002516, 't4zeng', 'test', 't4zeng@uwaterloo.ca')", (err, res) => {
    if (!err) {
      console.log(res.rows);
    } else {
      console.log(err);
    }
    pool.end();
  });
  