const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secretKey = "test"; // Replace with your actual secret key

router.post("/", async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // Respond with success message or data
    return res.json({ success: true, message: "Token is valid", data: decodedToken });
  } catch (err) {
    // If the token is invalid or expired, an error will be thrown
    console.error("Token verification failed:", err);

    // Respond with error message or data
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
});

module.exports = router;
