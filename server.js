
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
const PORT = process.env.PORT || 6969;
const clients = [];


const broadcast = (sender, message) => clients
.filter(c => c !== sender)
.forEach(c => {
  console.log(c);
  c.write(message);
});

const server = net.createServer((client) => {
  // registerclient into cliemts
  console.log('client conntected');
  clients.push(client);

  client.username = null;
  // prompt user

  client.write("what is your user name? \n");

  client.on('data', (data) => {
    if(client.username === null){
      // set username to data 
      client.username = data.toString();
      client.write(`Welcome ${client.username}`);
    }else{
      broadcast(client, data.toString());
    }
  });
});


server.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
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





//old code 