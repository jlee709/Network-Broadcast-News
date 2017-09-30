
// net library 
// "create server" will be used in server.js
// "create connection" method (used in client.js)

// `server.js`. use net library 

//1. Use the [**net**](https://nodejs.org/api/net.html) module to create a new server 
// that listens on a specified address 
//   "`0.0.0.0` and port `6969` and listens for and accepts socket connections."

//2. Manage which sockets are connected, and maintain your sockets so that it removes any 
//   sockets that disconnect from your server.

//3. Each connected socket is a **Duplex** stream, when it emits a 'data' event, 
//   broadcast the data to all sockets.


//  use nodemon = npm install -g nodemon
// create server create connection very important most research there due to callbacks etc. TCP

console.log('how to test server here'); 

const net = require('net');

var clients = [];
//jons code
const server = net.createServer((socket) => {
  // socket is a duplex stream
  console.log('client connected');

  socket.on('end', () => {
    console.log('client disconnected');
  });
  
  socket.write('hello\r\n');

  socket.pipe(socket);
});
  // 'connection' listener


server.on('error', (err) => {
  throw err;
});

server.listen(6969, '0.0.0.0', ()=> {
  console.log('server listening on port 3000 %j' + server.address());
});


// tubeTut

// var http = require('http');
// function onRequest(request, response){
//   console.log("User made a request" + request.url);
//   response.writeHead(200, {"Context-Type": 'text/plain'});
//   response.write("here is some data");
//   response.end();
// }

// http.createServer(onRequest).listen(6969);
