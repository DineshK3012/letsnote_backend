const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

//configuring the env file only in development mode
if (process.env.NODE_ENV !== 'PRODUCTION')
    require("dotenv").config({ path: "backend/config/config.env" })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const user = require('./routes/user');
const category = require('./routes/category');
const notes = require('./routes/note');

app.use('/api', user);
app.use('/api', notes);
app.use('/api', category);


module.exports = app;
