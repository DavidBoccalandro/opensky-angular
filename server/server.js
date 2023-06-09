const express = require('express');
const app = express();
const { generateDb, loadDb } = require('./generateData.js');
const bcrypt = require('bcrypt');
const { generateJwt } = require('./jwt.js');

const port = 3001;

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const data = loadDb();
  const user = data.find((user) => user.username === username && bcrypt.compareSync(password, user.hashedPassword));
  if (!user) {
    return res.status(401).json('Error');
  }
  const token = generateJwt(user);
  return res.json(token);
});

app.listen(port, () => {
  console.log(`JSON Server is running in port ${port}`);
  generateDb();
});
