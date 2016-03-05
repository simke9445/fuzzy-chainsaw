var express = require('express');
var r = require('rethinkdb');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');

var assert = require('assert');

var volunteers = require('./routes/volunteers');
var coordinators = require('./routes/coordinators');
var admins = require('./routes/admins');

var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

var db = require('./lib/db');

app.locals.config = require('./config');

r.connect(app.locals.config.rethinkdb, function(err, connection) {
    assert(err == null, err);

    app.locals.rdbConn = connection;

    require('./realtime/posts')(io, app, r.db(app.locals.config.rethinkdb.db));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(db.createConnection);

app.use('/', volunteers);
app.use('/coordinator', coordinators);
app.use('/admin', admins);

app.use(db.closeConnection);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

server.listen(3000);
