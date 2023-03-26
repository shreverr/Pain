// Imports
const express = require('express');
const path = require('path');
const session = require('express-session');

const port = 5500;
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("teri maa ki choot");
});

app.listen(port, () => {
  console.log(`site alive on http://localhost:${port}`);
});