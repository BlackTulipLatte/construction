// Protected route example
app.get('/protected', verifyToken, (req, res) => {
    // This route is protected and requires a valid JWT token
    // The verifyToken middleware will check if the token is valid
    res.json({ message: 'Protected route accessed successfully.' });
  });
  
  // Middleware to verify JWT token
  function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.email = decoded.email; // Store the email from the token in the request object for later use
      next();
    });
  }