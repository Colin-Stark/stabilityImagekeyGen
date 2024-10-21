const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send(`${process.env.key}`);
});

module.exports = app;