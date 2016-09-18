/*
* @Author: Muhammad Muflikh Kholidin
* @Date:   2016-09-17 12:58:49
* @Last Modified by:   Muflih Kholidin
* @Last Modified time: 2016-09-18 07:00:32
*/

var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');
var serveStatic = require('serve-static')
app = express();
var port = process.env.PORT || 8081;

var apiProxy = proxy('/api', {
        target: 'http://kholid.in:8080',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
);

var app = express();
    app.use(serveStatic(path.join(__dirname, 'dist')));
    app.use('/api', apiProxy);
    app.listen(port);
console.log('server started '+port);
