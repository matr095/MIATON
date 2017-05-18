var html = require('fs').readFileSync(__dirname+'/agar.html');
var app = require('http').createServer(function(req, res){ res.end(html); });
app.listen(8081);
var io = require("socket.io");
var io = io.listen(app);
io.sockets.on('connection', function (socket) {
	socket.on('alerte', function(msg) {
		console.log(msg)
		socket.emit('alerte', msg);
   		socket.broadcast.emit('alerte', msg);
	})
	socket.on('create', function(msg) {
   		socket.emit('create', msg);
   		socket.broadcast.emit('create', msg);
	})
});
