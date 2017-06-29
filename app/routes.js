'use strict';

/**
 * Module dependencies.
 * @private
 */
var customerController = require('./controllers/customer_controller');
var Customer = require('./models/customer');
var operatorController = require('./controllers/operator_controller');

module.exports = function (app, path, passport) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: path + '/public/pages/' });
    });

    app.get('/rest/search-by-name', function (req, res) {
        var name = req.query.name;
        customerController.searchByNickname(name).then(function(c) {
            var locations = [];
            c.forEach(function(each, index) {
                locations[index] = {lat: each.lat, lng: each.lng, name: each.name};
            });
            res.json(locations);
        });
    });

    app.post('/rest/add-location', function (req, res) {
        var name = req.body.name;
        var lat = req.body.lat;
        var lng = req.body.lng;
        var route = req.get('route');
        customerController.addLocation(name, lat, lng, route).then(function() {
            res.send({ status: 'SUCCESS' });
        });
    });

    // login
    app.get('/login', function (req, res) {
        res.sendFile('login.html', { root: path + '/public/pages/' });
    });
    app.post('/rest/login', passport.authenticate('basic', { session: true}), function(req, res) {
        res.json({ username: req.user.username });
    });
};

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}