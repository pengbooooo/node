var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var registeredRouter = require('./routes/registered');
var blogRouter = require('./routes/blog');
var blog2Router = require('./routes/blog2');
var textRouter = require('./routes/text');
var addRouter = require('./routes/add');

// var blankPageRouter = require('./routes/blankPage');
// var contactRouter = require('./routes/contact');
// var elasticRouter = require('./routes/elastic');
// var galleryRouter = require('./routes/gallery');
// var index1Router = require('./routes/index-1');
// var index2Router = require('./routes/index-2');
// var shortcodesRouter = require('./routes/shortcodes');
// var sliderRouter = require('./routes/slider');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
  secret:"123",
  cookie:{maxAge:60000}
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login',loginRouter);
app.use('/home',homeRouter);
app.use('/registered',registeredRouter);
app.use('/blog',blogRouter);
app.use('/blog2',blog2Router);
app.use('/text',textRouter);
app.use('/add',addRouter);
// app.use('/blankPage',blankPageRouter);
// app.use('/contact',contactRouter);
// app.use('/elastic',elasticRouter);
// app.use('/gallery',galleryRouter);
// app.use('/index-1',index1Router);
// app.use('/index-2',index2Router);
// app.use('/shortcodes',shortcodesRouter);
// app.use('/slider',sliderRouter);

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
