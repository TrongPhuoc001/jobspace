const express = require('express');
const path = require('path');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./src/config/db.config');
require('dotenv').config();
const apiRoute = require('./src/components/routes');

//connect to mongo database
db.connectDatabase(process.env.DB_URL);

//configure app
const port = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';
const app = express();
app.use(cookieParser('booking'));
app.use(cors());

//create log stream
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log'),
});

app.use(
  isProduction ? morgan('combined', { stream: accessLogStream }) : morgan('dev')
);

app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  })
);

app.use(express.urlencoded({ extended: false }));

//api route
app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
