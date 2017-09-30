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

