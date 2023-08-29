const express = require('express');
const app = express();
const port = 3000;

// Set up your view engine and other middlewares here

// Import the profileRoutes.js file
const profileRoutes = require('./profileRoutes');

// Use the router for the /profile path
app.use('/profile', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
