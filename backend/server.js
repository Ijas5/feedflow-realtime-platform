require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

const feedRoutes = require("./routes/feed");

const app = express();

const server = http.createServer(app);


// SOCKET.IO
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});


app.use(cors());

app.use(express.json());


// PASS SOCKET TO ROUTES
app.use((req, res, next) => {

  req.io = io;

  next();
});


// ROUTES
app.use("/feed", feedRoutes);


// SOCKET CONNECTION
io.on("connection", (socket) => {

  console.log("Socket Connected:", socket.id);

  socket.on("disconnect", () => {

    console.log("Socket Disconnected");
  });
});


// START SERVER
server.listen(process.env.PORT, () => {

  console.log(`
==================================
FeedFlow Backend Running
PORT: ${process.env.PORT}
==================================
  `);
});