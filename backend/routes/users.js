const express = require("express");
const router = express.Router();
const client = require("../db");
const jwt = require("jsonwebtoken");

// Define the POST route for /login

router.post("/", async (req, res) => {
  // Your POST route logic for /login
  const { email, password } = req.body;
  console.log(email, password);

  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  try {
    const queryCheck = "SELECT COUNT(*) FROM accounts WHERE email = $1";
    const resultCheck = await client.query(queryCheck, [email]);
    const exists = resultCheck.rows[0].count > 0;
    console.log(exists);

    if (exists) {
      return res.json({ exists: true });
    } else {
      const queryInsert =
        "INSERT INTO accounts (email, password) VALUES ($1, $2)";
      await client.query(queryInsert, [email, password]);
      return res.json({
        exists: false,
        message: "User added to the database.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
