const express = require('express');
const path = require('path');

const server = express();

// Allow incoming request for the public directory only
server.use('/assets', express.static(path.join(__dirname, 'public')));

// Se view engine and views directory
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Fuzzy route for now
server.get('/', (request, response) => {
    response.render('index');
});

// Start server on port PORT
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});