import express from "express";
import { createServer } from "http";
import router from "./routes/iceCream.js";

const app = express();
const server = createServer(app);

app.use(express.static("public"));
app.use(express.json());
app.use("/iceCream", router);

server.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
