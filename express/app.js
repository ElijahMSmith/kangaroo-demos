import express from "express";
import iceCream from "./routes/iceCream.js";
import { rejectUnauthenticated, checkStuff } from "./middleware/test.js";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(checkStuff);
app.use(rejectUnauthenticated);

app.use("/api", iceCream);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
