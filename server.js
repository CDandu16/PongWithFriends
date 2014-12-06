var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/', function(req, res){
  res.sendFile(__dirname + '/controller.html');
});

io.on('connection', function(socket){
    socket.on('acceleration', function(data){
      io.sockets.emit('acceleration', data);
      console.log(data);
    });

  console.log("User has connected");
});

http.listen(8000, function(){
  console.log('listening on *: 8000');
});
