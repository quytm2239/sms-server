'use strict';

/**
 * Module dependencies.
 * @private
 */
var lastLocation = require('../dao/lastLocation_dao.js');

module.exports = {
    getLastLocations: function() {
        return lastLocation.searchByNickname(name);
    },
}
