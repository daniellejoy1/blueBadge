const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to the user controller");

});

router.post('/create', (req, res) => {
    const {email, password} = req.body;

    user.create({
        email,
        password,
    })
    
    .catch(error => 
        res
        .status(500)
        .send({message: "user not created", error:error.errors[0].message})
        )
    });

module.exports = router