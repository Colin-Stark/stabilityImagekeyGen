const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    if (process.env.KEY) {
        res.send(`${process.env.KEY}`);
    }
    else {
        res.send('Error');
    }
});


module.exports = app;