var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var express = require('express');
var session = require('express-session');
var proxy = require('proxy-middleware');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/static',  express.static(__dirname + '/static'));

app.get('/', function(req, res, next){
    res.render('index');
});

// -----your-webpack-dev-server------------------
app.use('/assets', proxy(url.parse('http://localhost:9090/assets')));
var server = new WebpackDevServer(webpack(require('./webpacks/webpack.config.js')), {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",

    stats: { colors: true }
});
server.listen(9090, "localhost", function() {});

// Run server
app.listen(9001);