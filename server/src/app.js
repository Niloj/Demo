//libs
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
const twitterRoutes = require('./api/routes/Issue');
const stackOverflowRoutes = require('./api/routes/Suggestion');
app.use('/issues', twitterRoutes);
app.use('/suggestions', stackOverflowRoutes);

app.use((req, res, next) => {
  const error = new Error(`Error: \'${req.originalUrl}\' route not found.`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
