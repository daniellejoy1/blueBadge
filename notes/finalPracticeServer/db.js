const Sequelize = require ('sequelize');

const db = new Sequelize(process.env.DB_NAME, 'postgres', DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db;
