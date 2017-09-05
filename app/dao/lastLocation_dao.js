'use strict';

/**
 * Module dependencies.
 * @private
 */
var db = require('../../config/db');
var lastLocation = require('../models/lastLocation');

module.exports = {
    getLastLocations: function() {
        return db.sequelize.query('SELECT * FROM last_location where name like ?', { raw: true, model: customer.customer, mapToModel: true, replacements: ['%' + name + '%'] });
    },
}
