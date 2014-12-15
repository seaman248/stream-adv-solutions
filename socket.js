var websocket = require ('websocket-stream');

var ws = websocket('http://localhost:8000');

ws.pipe('hello\n');