const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const journeyRoute = require('./routes/journey.js');
const authRoute = require('./routes/auth');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(error);
});

db.once('open', () => {
  console.log('db connection done successfullt!!')
})

const app = new express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is listening to PORT ${PORT}`);
});

app.use(cors())
app.use('/api/journey', journeyRoute);
app.use('/api/journey-auth/', authRoute);