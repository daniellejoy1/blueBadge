const express = require("express");

const app = express();

const db = require('./db');
const userController = require('./controllers/user.controller');

app.use('/user', userController)

db.sync();


app.listen(3000, ()=> console.log('app is listening on port 3000'));