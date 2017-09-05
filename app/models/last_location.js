'use strict';

/**
 * Module dependencies.
 * @private
 */
var Sequelize = require('sequelize');
var db = require('../../config/db');

var last_location = db.sequelize.define('LastLocation', {
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
    tableName: 'last_location'
  }
);

module.exports = {
  last_location
}
