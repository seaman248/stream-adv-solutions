var split = require('split');
var through = require('through');

var counter = 0;

process.stdin.pipe(split()).pipe(through(function(buf){
			var line = buf.toString();
			this.queue(counter % 2 === 0
				? line.toLowerCase() + '\n'
				: line.toUpperCase() + '\n');
			counter ++;
	})).pipe(process.stdout);