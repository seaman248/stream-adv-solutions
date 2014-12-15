var concat = require('concat-stream');


process.stdin
	.pipe(concat(function(data){
		var dataR = data.toString().split('').reverse().join('');
		console.log(dataR);
	}));