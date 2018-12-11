var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function(){
    console.log('ouvindo requisicoes na porta 4000')
});

// arquivos estáticos
app.use(express.static('public'));

// setup do socket
var io = socket(server);

io.on('connection',function(socket){
    console.log('Conectou com o socket')

    //handle chat event
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    })
});

