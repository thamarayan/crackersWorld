require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo');
var fs = require('fs'); 
var nodemailer = require('nodemailer');

var indexRouter = require('./routes/index');

var app = express();

const mongoUri = 'mongodb+srv://' + process.env.DB_UN + ':' + process.env.DB_PW + '@cluster0.slsto1f.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ limit:'50mb', extended: true, parameterLimit:1000000 }));
app.use(cookieParser());
app.use(session({
  secret: 'iAmBillBoy', 
  resave:false, 
  saveUninitialized:false,
  store: MongoStore.create({ mongoUrl : mongoUri }),
  cookie:{maxAge:180*60*1000},
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
