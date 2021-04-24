let express = require('express');

let app = express();

app.use (express.json())

app.post('/test', function (req, res) {
    res.send('Test Endpoint Success');
})

app.listen(8000, function()
{ console.log('app is listening')
})