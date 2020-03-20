const express = require('express');

const app = express();

// Fuzzy route for now
app.get('/', (request, response) => {
    response.send("<h1>Welcome from TecaBit!</h1>")
});

// Start server on port PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});