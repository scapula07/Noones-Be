const dotenv = require('dotenv');
const http = require('http');
const Websocket = require("ws");

dotenv.config({ path: 'config.env' });
const app = require('./app');
const server = http.createServer(app);

const socket = new Websocket.Server({ server });

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});