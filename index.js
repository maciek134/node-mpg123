/**
 * node-mpg123
 * Javascript mpg123 wrapper for Node.js
 *
 * @author Maciej Sopyło (killah)
 * Copyright 2012 Maciej Sopyło @ KILLAHFORGE.
 *
 * MIT License
 */
 
module.exports = function Sound(filename) {
	this.filename = filename;
};
module.exports.prototype = {
	play: function () {
		this.process = require('child_process').spawn('mpg123', [ this.filename ]);
	},
	stop: function () { this.process.kill('SIGTERM'); },
	pause: function () { this.process.kill('SIGSTOP'); },
	resume: function () { this.process.kill('SIGCONT'); }
};
