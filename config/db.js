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

const sequelize = new Sequelize('d3req1cv408t06', 'lcrzlfpkqyuezy', '61aa25d46f82cb21ae2a737a79a3e4671e6ba623c46a7032e099d48eea311e30', {
  host: 'ec2-23-21-220-48.compute-1.amazonaws.com',
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