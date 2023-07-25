const express = require("express");
const router = express.Router();
const client = require("../db");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  // Your POST route logic for /login
  const { email, trelloData } = req.body;
  try {

    const query = {
      text: 'UPDATE accounts SET "trelloData" = $1 WHERE email = $2',
      values: [trelloData, email],
    };

    const result = await client.query(query);
    return res.json({ message: 'Update successful' });
  } catch (error) {
    console.error('Error updating data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
  module.exports = router;
  