const WebSocket = require('ws');
const server = require('http').createServer();
const port = 3000;
const cities = require('./__mocks__/cities');

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', (webSocket) => {
	webSocket.on('message', (_message) => {
		webSocket.send(JSON.stringify(cities));
	});
});

server.listen(port, () => console.log(`App listing to port ${port}`));