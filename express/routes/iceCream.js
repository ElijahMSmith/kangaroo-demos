import { Router } from "express";

const router = Router();

import { getStock, buyIceCream } from "../controllers/iceCream.js";

router.route("/stock").get(getStock).post(buyIceCream);

export default router;
