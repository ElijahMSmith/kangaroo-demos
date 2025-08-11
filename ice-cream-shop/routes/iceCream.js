import { Router } from "express";
import { buyIceCream, getStock } from "../controllers/iceCream.js";

const token = "1234";

const router = Router();

router.use((req, res, next) => {
	const auth = req.headers.authorization;
	console.log(auth);
    
	if (!auth || auth !== `Bearer ${token}`) {
		res.status(401).send({ error: "Not authenticated" });
		return;
	}

	next();
});

router.get("/stock", (req, res) => {
	const stock = getStock();
	res.status(200).json(stock);
});

router.post("/stock", (req, res) => {
	if (!req.body) {
		res.status(400).json({ error: "Missing flavor and/or scoops" });
		return;
	}

	const { flavor, scoops } = req.body;
	if (!flavor) {
		res.status(400).json({ error: "Missing flavor" });
		return;
	}
	if (!scoops) {
		res.status(400).json({ error: "Missing scoops" });
		return;
	}

	const error = buyIceCream(flavor, scoops);
	if (error !== "") {
		res.status(400).json({ error });
		return;
	}

	res.status(204).send();
});

export default router;
