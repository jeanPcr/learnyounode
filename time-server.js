const net = require("net");
const PORT = process.argv[2];

const server = net.createServer(function (socket) {
  const date = new Date();
  socket.write(`2020-11-10 ${date.getHours()}:${date.getMinutes()}`);
  socket.end("\n");
});

server.listen(PORT);
