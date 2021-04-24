const Express = require('express');
const database = require('./db');
const userController = require('./Controllers/userController');


const app = Express();

database.sync();

app.use(Express.json());

app.use('/user', userController);



app.listen(8000, () => console.log('[8080]: a message'));
