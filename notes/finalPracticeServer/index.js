require('dotenv').config()

const Express = require('express');
const database = require('./db');
const userController = require('./Controllers/userController');


const app = Express();

database.sync();

app.use(require())
app.use(Express.json());

app.use('/user', userController);



app.listen(process.env.PORT, () => console.log(`[${process.env.PORT}]: a message`));

