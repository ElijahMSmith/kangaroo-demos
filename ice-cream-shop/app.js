import express from "express";
import { createServer } from "http";
import router from "./routes/iceCream.js";

import { config } from "dotenv";
import mongoose from "mongoose";

config();

const app = express();
const server = createServer(app);

app.use(express.static("public"));
app.use(express.json());
app.use("/iceCream", router);

try {
	await mongoose.connect(process.env.MONGODB_URI);
	console.log("Connected to MongoDB!");
} catch (error) {
	console.error(error);
}

server.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
