const sequelize = require('sequelize');
const db = require("../db")

const user = db.define ('user', {
    email:{
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },
})

module.export = user;