const express = require('express');
const cors = require('cors');
const app = express();

// settings: server config
// It's like a variable 'port': depoyAppPort || 4000
app.set('port', process.env.PORT || 4000); 

// middlewares: functions excecuted before it enters to the routes
app.use(cors()); // thus, you can send and retrieve data from server
app.use(express.json()); // now server can understand JSON files


// routes
// app.use('/api/<name>', require('./routes/<name>'));
/* Some more code for routes definition here */

module.exports = app;

