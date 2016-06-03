'use strict';

var path = require('path');

module.exports = function(secret) {
	return {
		server: {
			http: {
				mode: 'enable'
			},
			router: {
				dir: path.join(__dirname, '../route')
			},
			static: [
				{
					url: '/out',
					path: path.join(__dirname, '../out')
				}
			],
			middleware: {
				loader: [
					{ dir: path.join(__dirname, '../node_modules/swint-middleware/lib/middlewares') }
				],
				pre: ['swint-style-api'],
				post: []
			}
		}
	};
};