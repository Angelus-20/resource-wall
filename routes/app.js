const express = require('express');
const app = express();
const path = require('path'); // Import the path module

// ...

// Set the 'views' directory for your templates
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// ...

// Use the deals route
const dealsRouter = require('./routes/deals');
app.use('/deals', dealsRouter);

// ...

module.exports = router;
