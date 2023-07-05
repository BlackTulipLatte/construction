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