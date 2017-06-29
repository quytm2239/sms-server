'use strict';

/**
 * Module dependencies.
 * @private
 */
var db = require('../../config/db');
var customer = require('../models/customer');

module.exports = {
    searchByNickname: function(name) {
        return db.sequelize.query('SELECT * FROM customers where name like ?', { raw: true, model: customer.customer, mapToModel: true, replacements: ['%' + name + '%'] });
    },

    addLocation: function(name, lat, lng, route) {
        return db.sequelize.query('INSERT INTO customers (name, lat, lng, route, insert_datetime) VALUES(?, ?, ?, ?, now());', { raw: true, model: customer.customer, mapToModel: true, replacements: [name, lat, lng, route] });
    }
}
