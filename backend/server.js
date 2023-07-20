const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const client = require("./db");
const port = 3000;

// Enable CORS
app.use(cors()); // Add this line

// Initialize the database connection
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

client.connect();

// CRUD operations
app.get('/users', async (req, res) => {
    console.log(req.query);
    const { email, password } = req.query;
    console.log(email, password);
  
    try {
      const query = 'SELECT COUNT(*) FROM accounts WHERE email = $1 AND password = $2';
      const result = await client.query(query, [email, password]);
  
      const exists = result.rows[0].count > 0;
      res.json({ exists });
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// POST to see if email exists
app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  try {
    const queryCheck = 'SELECT COUNT(*) FROM accounts WHERE email = $1';
    const resultCheck = await client.query(queryCheck, [email]);
    const exists = resultCheck.rows[0].count > 0;
    console.log(exists);

    if (exists) {
      return res.json({ exists: true });
    } else {
      const queryInsert = 'INSERT INTO accounts (email, password) VALUES ($1, $2)';
      await client.query(queryInsert, [email, password]);
      return res.json({ exists: false, message: 'User added to the database.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST to login to the platform
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  try {
    const queryCheck = 'SELECT COUNT(*) FROM accounts WHERE email = $1 AND password = $2';
    const resultCheck = await client.query(queryCheck, [email,password]);
    const exists = resultCheck.rows[0].count > 0;
    console.log(exists);

    if (exists) {
      return res.json({ exists: true, message: 'User exists' });
    } else {
      return res.json({ exists: false, message: 'User does not exist.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
