/*
* @Author: Muhammad Muflikh Kholidin
* @Date:   2016-09-17 12:58:49
* @Last Modified by:   Muflih Kholidin
* @Last Modified time: 2016-09-17 13:01:56
*/

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static')
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 8081;
app.listen(port);
console.log('server started '+port);