const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'root', 'Okami1928', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;