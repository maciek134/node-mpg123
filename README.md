node-mpg123
===========

Entirely JS based mpg123 (http://www.mpg123.de/) wrapper for Node.js.

Example Usage
------------

````javascript
var Sound = require('mpg123');

// fire and forget:
new Sound('/path/to/the/file/filename.mp3').play();


// with ability to pause/resume:
var music = new Sound('/path/to/the/file/filename.mp3');
music.play();

setTimeout(function () {
	music.pause(); // pause the music after five seconds
}, 5000);

setTimeout(function () {
	music.resume(); // and resume it two seconds after pausing
}, 7000);

// you can also listen for various callbacks:
music.on('complete' function () {
	console.log('Done with playback!');
});
````

It's simple as that.

Documentation
------------
In progress.
