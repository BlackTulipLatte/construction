const express = require("express");
const router = express.Router();
const client = require("../db");
const jwt = require("jsonwebtoken");
const secretKey = "test";

// Define the POST route for /login
router.post("/", async (req, res) => {
  // Your POST route logic for /login
  const { email, password } = req.body;
  console.log(email, password);

  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  try {
    const queryCheck =
    "SELECT COUNT(*) FROM accounts WHERE email = $1 AND password = $2";
    const resultCheck = await client.query(queryCheck, [email, password]);
    const exists = resultCheck.rows[0].count > 0;
    console.log(exists);

    if (exists) {
      // Create a JWT token with the email as the payload
      const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
      return res.json({ exists: true, token, message: "User exists" });
    } else {
      return res.json({ exists: false, message: "User does not exist." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
