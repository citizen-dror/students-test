const http = require('http');
const app = require('./app');

// Get port from environment and store in Express.
const port = process.env.PORT || 5000;
app.set('port', port);

// Create HTTP server.
http.createServer(app).listen(port, () => console.info(`Server has started on ${port}`));

