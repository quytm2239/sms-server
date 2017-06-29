'use strict';

/**
 * Module dependencies.
 * @private
 */
var db = require('../../config/db');
var customer = require('../models/customer');

module.exports = {
    searchByNickname: function(name) {
        return db.sequelize.query('SELECT * FROM customers where NAME like ?', { raw: true, model: customer.customer, mapToModel: true, replacements: ['%' + name + '%'] });
    },

    addLocation: function(name, lat, lng, route) {
        return db.sequelize.query('INSERT INTO customers (NAME, LAT, LNG, ROUTE, INSERT_DATETIME) VALUES(?, ?, ?, ?, now());', { raw: true, model: customer.customer, mapToModel: true, replacements: [name, lat, lng, route] });
    }
}