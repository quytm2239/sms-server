'use strict';

/**
 * Module dependencies.
 * @private
 */
var customerDao = require('../dao/customer_dao.js');

module.exports = {
    searchByNickname: function(name) {
        return customerDao.searchByNickname(name);
    },

    addLocation: function(name, lat, lng, route) {
        return customerDao.addLocation(name, lat, lng, route);
    }
}