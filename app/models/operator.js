'use strict';

/**
 * Module dependencies.
 * @private
 */
var Sequelize = require('sequelize');
var db = require('../../config/db');

var operator = db.sequelize.define('Operator', {
  loginId: {
    type: Sequelize.STRING,
    field: 'login_id'
  },
  pw: {
    type: Sequelize.STRING,
    field: 'pw'
  }
}, {
    freezeTableName: true,
    tableName: 'operator'
  }
);

module.exports = {
  operator
}
