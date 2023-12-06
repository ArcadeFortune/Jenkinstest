
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors('*'));

require('./server')(app)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


module.exports = app;
