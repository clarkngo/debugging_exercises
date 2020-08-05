const createError = require('http-errors');       // creates new error object
const express = require('express');               // web framework for node
const path = require('path');                     // provides utilities for working with file and directory paths
const cookieParser = require('cookie-parser');    // Parse Cookie header and populate req.cookies with an object keyed by the cookie names
const logger = require('morgan');                 // HTTP request logger middleware for node.js
require('./app_api/models/db');                   // import db.js - mongodb connection

const indexRouter = require('./app_server/routes/index'); // import index.js in app_server/routes
const apiRouter = require('./app_api/routes/index');      // import index.js in app_api/routes

const app = express();  // creates a new express application

/*----- start - view engine setup -----*/

// app.set() setting the value of the 1st parameter with the 2nd parameter
// __dirname tells you the absolute path of the directory containing the currently executing file

// 'views' the directory where the template files are located
app.set('views', path.join(__dirname, 'app_server', 'views'));  // i.e. views = /Users/username/project_folder/app_server/views

// 'view engine' the template engine to use
app.set('view engine', 'pug');

/*----- end - view engine setup -----*/


/*----- start - middleware -----*/
/* bind application-level middleware to an instance of the app object */
app.use(logger('dev'));         // logging middleware - 'dev' concise output colored by response status for development
app.use(express.json());        // parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));   // parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(cookieParser());        // cookie parser parses cookies and puts the cookie information on req object in the middleware
app.use(express.static(path.join(__dirname, 'public')));  //  serves static assets such as HTML files, images, and so on.

app.use('/', indexRouter);      // redirects to routes to index.js in /app_server/routes/
app.use('/api', apiRouter);     // redirects to routes to index.js in /app_api/routes/

// catch 404 and forward to error handler
// when the client access a non-existent route, instead of 500 the client will receive 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development

  // res.locals
  //    An object that contains response local variables scoped to the request,
  //    and therefore available only to the view(s) rendered during that request / response cycle (if any).
  res.locals.message = err.message;

  // passing the error object into the pug template to be rendered on the error.pug template file
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/*----- end - middleware -----*/

module.exports = app;
