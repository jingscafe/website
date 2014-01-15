/**
 * Module dependencies.
 */

var fs = require('fs');
var pg = require('pg');
var read = require('read');
var express = require('express');
var http = require('http');
var path = require('path');
var util = require('util');

var RDS_POSTGRES_CONN_STRING = "postgres://david8373:%s@david8373-postgres-db.cesjjcp6a6ro.us-west-2.rds.amazonaws.com:5432/postgres_db";
var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));

var home = require('./handlers/home.js');
app.get('/', home.get);
app.post('/', home.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var password = "Einstein1";
var CONN_STRING = util.format(RDS_POSTGRES_CONN_STRING, password);
POSTGRES_CLIENT = new pg.Client(CONN_STRING);
POSTGRES_CLIENT.connect();
