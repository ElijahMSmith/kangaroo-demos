import { io } from "socket.io-client";
import { exit } from "process";
import * as readline from "readline";

const args = process.argv;
if (args.length != 3) {
	console.error("Invalid args! Expected <username>.");
	exit(1);
}
const username = args[2];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const sendMsg = () => {
	rl.question("", (input) => {
		socket.emit("input_msg", `${username}: ${input}`);
		sendMsg();
	});
};

const socket = io("http://localhost:3000");

socket.on("connect", () => {
	console.log("Connected to server!");

	socket.on("disconnect", () => {
		console.error("Connection lost");
		exit(1);
	});

	socket.on("output_msg", (msg) => {
		console.log(`[MESSAGE]: ${msg}`);
	});

	sendMsg(socket);
});
