'use strict';

/**
 * Module dependencies.
 * @private
 */
var db = require('../../config/db');
var operator = require('../models/operator');

module.exports = {
    searchByLoginId: function(loginId) {
        return db.sequelize.query('SELECT * FROM operators where LOGIN_ID = ?', { raw: true, model: operator.operator, mapToModel: true, replacements: [loginId] });
    }
}