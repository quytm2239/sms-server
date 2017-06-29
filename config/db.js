'use strict';

/**
 * Module dependencies.
 * @private
 */
var Sequelize = require('sequelize');
var moment = require('moment');

/*var sequelize = new Sequelize('location', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: moment().format('Z'),

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});*/

const sequelize = new Sequelize('dccstqroup2hta', 'ttijzszzdthibj', '950356533b1c64339b5250de38c0fed3e5ad177306517215e3fbbf969014c1ef', {
  host: 'ec2-54-247-120-169.eu-west-1.compute.amazonaws.com',
  port: 5432,
  dialect: 'postgresql',
  logging: false,
  pool: {
    max: 100, // max pool size, concurrency connection
    min: 0,
    idle: 10000 // will close after 10000 miliseconds if not being used
  },

});

module.exports = {
    sequelize
}

//Create Item Table Structure
var Customer = sequelize.define('customer', {
    ID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    NAME: Sequelize.STRING,
    LAT: Sequelize.DOUBLE,
    LNG: Sequelize.DOUBLE,
    ROUTE: Sequelize.STRING,
    INSERT_DATETIME: Sequelize.DATE
});

// force: true will drop the table if it already exists
Customer.sync({force: false}).then(() => {
});

//Create Item Table Structure
var Operator = sequelize.define('operator', {
    ID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    LOGIN_ID: Sequelize.STRING,
    PW: Sequelize.DOUBLE,
    INSERT_DATETIME: Sequelize.DATE
});

// force: true will drop the table if it already exists
Operator.sync({force: false}).then(() => {
});
