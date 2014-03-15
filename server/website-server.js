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

var CafeDBUtils = require('./CafeDBUtils.js');

var home = require('./handlers/home.js');
var travel = require('./handlers/travel.js');

http.createServer(function(request, response){  
  console.log('Get a request!');
}).listen(8080);

var CONN_STRING = util.format(
  CafeDBUtils.RDS_POSTGRES_HOST, 
  CafeDBUtils.RDS_POSTGRES_HOST_PASSWORD
);

POSTGRES_CLIENT = new pg.Client(CONN_STRING);
POSTGRES_CLIENT.connect();
