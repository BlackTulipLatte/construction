const express = require("express");
const router = express.Router();
const client = require("../db");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
    const { token } = req.body;
    console.log(token);
    console.log(process.env.ACCESS_TOKEN_SECRET);
    return res.json({ token });
  });
  
  module.exports = router;