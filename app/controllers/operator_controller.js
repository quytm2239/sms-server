'use strict';

/**
 * Module dependencies.
 * @private
 */
var operatorDao = require('../dao/operator_dao.js');

module.exports = {
    searchByLoginId: function(loginId) {
        return operatorDao.searchByLoginId(loginId);
    }
}