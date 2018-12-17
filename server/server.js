const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3002;

app.use(cors())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/rooms', (req, res) => {
  res.json({ body: 'hello world'});
});

// app.get('/', function(req, res) {
//   res.send(app.setState({repos: [1,2,3,4,5]}))
// });
