var sServer = require('swint-server'),
	sConfig = require('swint-configure'),
	path = require('path');

var config = sConfig({
	dir: path.join(__dirname, 'config'),
	mode: 'local'
});

var myServer = new sServer(config.server, function(){
	console.log('server start!');
});