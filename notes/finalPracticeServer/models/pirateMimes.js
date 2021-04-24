const sequelize = require('sequelize');
const database = require('../db');

module.exports = database.define('pirate-mime', {
    denim: {
        type: sequelize.STRING,
        allowNull:false,
    },
    specialMoves: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seaworthy: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    },
    heaviestPianoLift: DataTypes.DOUBLE
}); 