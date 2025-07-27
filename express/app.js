import express from "express";
import iceCream from "./routes/iceCream.js";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api", iceCream);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
