// server.js

const express = require('express');
const Socket = require('ws');
const uuidv1 = require('uuid/v1');
let totalOfConnexions = 0;
let connectionNotification;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new Socket.Server({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  totalOfConnexions++;

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === Socket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  };

  connectionNotification = { type: "connections", totalOfConnections: totalOfConnexions};
  wss.broadcast(connectionNotification);

  ws.on('message', (message) => {
    const newMessage = JSON.parse(message);
    newMessage.id = uuidv1();

    switch(newMessage.type) {
      case "postMessage":
        newMessage.type = "incomingMessage"
        break;
      case "postNotification":
        newMessage.type = "incomingNotification"
        break;
      default:
        throw new Error("Unknown event type " + newMessage.type);
    }

    wss.broadcast(newMessage)
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    totalOfConnexions--;
    console.log('Client disconnected');
    connectionNotification = { type: "connections", totalOfConnections: totalOfConnexions};
    wss.broadcast(connectionNotification);
  });
});

