/*

Ice Cream Flavors API: TODO
- Add a new flavor with a particular stock
- Get all flavors available
- Buy a flavor with X scoops

*/

const iceCreamStock = [
	{ flavor: "vanilla", scoops: 10 },
	{ flavor: "chocolate", scoops: 6 },
	{ flavor: "strawberry", scoops: 13 },
];

function getStock(req, res) {
	res.status(200).json({ iceCream: iceCreamStock });
}

function buyIceCream(req, res) {
	const { flavor, scoops } = req.body;

	if (!flavor) {
		res.status(400).send({ error: "Invalid Flavor" });
		return;
	}
	if (!scoops || scoops <= 0) {
		res.status(400).send({ error: "Invalid Quantity" });
		return;
	}

	for (let i = 0; i < iceCreamStock.length; i++) {
		let item = iceCreamStock[i];
		console.log(item);
		if (item.flavor !== flavor) {
			continue;
		}

		console.log(`${item.scoops} vs ${scoops}`);

		if (item.scoops < scoops) {
			res.status(400).send({ error: "Not Enough Stock!" });
			return;
		}

		item.scoops -= scoops;
		res.status(200).send({});
		return;
	}

	res.status(400).send({ error: "Flavor is Out of Stock!" });
}

export { getStock, buyIceCream };
