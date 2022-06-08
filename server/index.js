const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const PORT = 5001;

app.use(express.json());
app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

const rooms = ['general', 'tech', 'finance', 'crypte'];

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})


