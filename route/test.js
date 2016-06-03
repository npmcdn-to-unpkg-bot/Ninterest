'use strict';

exports.info = {
	url: '/',
	method: 'get'
};

exports.preMiddleware = [
];

exports.postMiddleware = [
];

exports.main = function(req, res, next) {
	res.send('<h1>hello Swint!</h1>');
	next();
};