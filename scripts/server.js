var express = require('express');
var proxy = require('express-http-proxy');
var jsonServer = require('json-server');
var optimist = require('optimist');

var api = jsonServer.create();
var app = express();

var appPort = optimist.argv['port-app'] || optimist.argv.port || process.env.PORT || process.env['PORT_APP'] || 3000;
var apiPort = optimist.argv['port-api'] || process.env['PORT_API'] || 3001;

if (appPort == apiPort) { throw new Error('Server port and API port cannot be same.') }

// api server
var router = jsonServer.router('db/db.json');
var middlewares = jsonServer.defaults();

api.use(middlewares)
api.use(router)
api.listen(apiPort, function () { console.log('JSON Server started with port ' + apiPort) });

// app server
app.use(express.static('dist'));
app.use('/api', proxy('localhost:' + apiPort));

app.listen(appPort, function() { console.log('Server started with port ' + appPort) });
