// jshint esversion:6
// net library 
// "create server" will be used in server.js
// "create connection" method (used in client.js)

// `client.js`

// 1. Create a new **net.Socket** and connect to your running socket server.

// 2. Once connected, pipe your terminal's standard input stream 
//    to write to your connected socket.

// 3. Whenever the connected socket (client) emits a 'data' event,
//    then data is being broadcasted from the server, pipe that data out to your 
//    terminal's standard output stream.


const net = require('net');
const PORT = process.env.PORT || 6969;


const client = net.createConnection(PORT, () => {
  //'connect' listener

  console.log('connected to server!');
  process.stdin.pipe(client);
  client.pipe(process.stdout);
});


// process.stdin.setEncoding('utf8');


// process.stdin.on('data', data => {
//   client.write(data);
// });

process.stdin.on('end', () => {
  process.stdout.write('end');
});

// client.on('data', (data) => {
//   console.log(data.toString());
// });

// client.on('end', () => {
//   console.log('disconnected from server');
// });