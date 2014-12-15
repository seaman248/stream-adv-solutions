var request = require('request');

var requ = request.post('http://localhost:8000');

process.stdin.pipe(requ).pipe(process.stdout);