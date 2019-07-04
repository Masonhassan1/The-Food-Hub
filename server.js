const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const config = require('./config.json');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./Routes/api')

mongoose.connect(config.MONGODB_URI || 'mongodb://localhost/recipie_mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongo connected!!'))

// HTTP request logger
app.use(morgan('tiny'));

app.use('/', routes)

app.listen(PORT, console.log(`Server starting at ${PORT}`))