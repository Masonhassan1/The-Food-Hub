const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./Routes/api')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.connection.on('connected', () => console.log('Mongo connected!!'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}
// HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes)

app.listen(PORT, console.log(`Server starting at ${PORT}`))