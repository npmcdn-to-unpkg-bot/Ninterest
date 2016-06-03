'use strict';
var path = require('path');

exports.info = {
	url: '/',
	method: 'get'
};

exports.preMiddleware = [
];

exports.postMiddleware = [
];

exports.main = function(req, res, next) {
	res.sendFile(path.join(__dirname, '../out/index.html'));
	next();
};