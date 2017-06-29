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
    field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lat: {
    type: Sequelize.DOUBLE,
    field: 'lat'
  },
  lng: {
    type: Sequelize.DOUBLE,
    field: 'lng'
  },
  id: {
    type: Sequelize.INTEGER,
    field: 'id',
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
