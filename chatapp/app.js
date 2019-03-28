var server = require('http').Server(app);
var io = require('socket.io')(server)


const users = {}
io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('chatting', (data) => {
    console.log(data)
    io.sockets.emit('chatting', data)
  })

  socket.on('online', (username) => {
    users[username] = socket.id;
    // io.emit('userList', users, users[users.length].id);
  })
  socket.on('sendMsg', (data) => {
    console.log(data, "check1")
    socket.emit('sendMsg', data)
  })

  socket.on('getMsg', (data) => {
    console.log(data, "check2")
    socket.broadcast.to(users[data.to]).emit('getMsg', {
      msg: data.msg,
      from: data.from,
      author: data.author
    });
  });
  socket.on('disconnect', () => {
    console.log(socket.id)
    delete users[Object.keys(users)[Object.values(users).indexOf(socket.id)]]
  })
});

