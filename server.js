// modules =================================================
var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var redis = require("redis");
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
//var LocalStrategy = require('passport-local').LocalStrategy;
var cookieParser = require('cookie-parser');
//
var operatorController = require('./app/controllers/operator_controller');

// configuration ===========================================
var client = redis.createClient(); // session store
app.use(cookieParser());
app.use(session({
  secret: "thisismysecretkey",
  store: new RedisStore({ host: 'localhost', port: 6379, client: client, pass: 'dev123' }),
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// authentication ==============================================
passport.serializeUser(function(user, done) {
    done(null, user.loginId);
});
passport.deserializeUser(function(id, done) {
    operatorController.searchByLoginId(id).then(function (user) {
        done(null, user);
    }).catch(function (err) {
        console.log(err);
    })
});
passport.use(new Strategy(
  function (username, password, cb) {
    operatorController.searchByLoginId(username).then(function (user) {
      if (!user) { return cb(null, false); }
      if (user.length != 1) { return cb(null, false); }
      if (user[0].pw != password) { return cb(null, false); }
      return cb(null, user[0]);
    });
  }
));

// routes ==================================================
require('./app/routes')(app, __dirname, passport); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// expose app           
exports = module.exports = app;