'use strict';

/**
 * Module dependencies.
 * @private
 */
var Sequelize = require('sequelize');
var db = require('../../config/db');

var customer = db.sequelize.define('Customer', {
  name: {
    type: Sequelize.STRING,
    field: 'NAME' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lat: {
    type: Sequelize.DOUBLE,
    field: 'LAT'
  },
  lng: {
    type: Sequelize.DOUBLE,
    field: 'LNG'
  },
  id: {
    type: Sequelize.INTEGER,
    field: 'ID',
    primaryKey: true
  }
}, {
    freezeTableName: true,
    tableName: 'customer'
  }
);

module.exports = {
  customer
}