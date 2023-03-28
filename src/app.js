// Imports
const express = require('express');
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');

const port = 5500;
const app = express();

app.use('/static', express.static( 'assets'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
  res.render('./templates/index');
});

app.get("/login", (req, res) => {
  res.render('./templates/loginpage');
});

app.get("/dashboard", (req, res) => {
  res.render('./templates/dashboard');
});

app.listen(port, () => {
  console.log(`site alive on http://localhost:${port}`);
});