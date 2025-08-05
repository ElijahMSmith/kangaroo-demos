const flavors = [
	{
		flavor: "vanilla",
		scoops: 5,
	},
	{
		flavor: "chocolate",
		scoops: 3,
	},
	{
		flavor: "strawberry",
		scoops: 8,
	},
];

function getStock() {
	return flavors;
}

function buyIceCream(flavor, scoops) {
	for (let i = 0; i < flavors.length; i++) {
		const item = flavors[i];
		if (item.flavor !== flavor) {
			continue;
		}

		if (item.scoops < scoops) {
			return `Wanted to buy ${scoops} scoops but only ${item.scoops} in stock`;
		}

		item.scoops -= scoops;
		return "";
	}

	return `Flavor ${flavor} is not in stock`;
}

export { getStock, buyIceCream };
