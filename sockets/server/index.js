import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

let connections = 0;

io.on("connection", (socket) => {
	console.log("new connection: " + socket.id);

	connections++;
	socket.on("disconnect", () => {
		console.log("disconnected: " + socket.id);
		connections--;
	});

	socket.on("input_msg", (msg) => {
		console.log(`From ${socket.id}: ${msg}`);
		socket.broadcast.emit("output_msg", msg);
	});
});

server.listen(3000, () => {
	console.log("server running at http://localhost:3000");
});

const SECOND = 1000;

setInterval(() => {
	console.log(connections + " users are connected to the server.");
}, 10 * SECOND);
