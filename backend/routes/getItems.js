const express = require("express");
const router = express.Router();
const pool = require("../db");
const jwt = require("jsonwebtoken");

// Define the POST route for /login
router.post("/", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const query = {
      text: 'SELECT "trelloData" FROM accounts WHERE email = $1',
      values: [email],
    };
    const result = await pool.query(query);
    res.json(result.rows[0].trelloData);

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
