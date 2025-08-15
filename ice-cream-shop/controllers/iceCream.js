import IceCreamModel from "../models/iceCream.js";

async function getStock() {
	try {
		return await IceCreamModel.find();
	} catch (error) {
		return [];
	}
}

async function buyIceCream(flavor, scoops) {
	let item;
	try {
		item = await IceCreamModel.findOne({ flavor });
	} catch (error) {
		return "Failed to get ice cream from database: " + error;
	}

	if (!item) {
		return "Flavor is not in stock!";
	}

	if (item.scoops < scoops) {
		return `Wanted to buy ${scoops} scoops but only ${item.scoops} in stock`;
	}

	item.scoops -= scoops;
	try {
		await item.save();
	} catch (error) {
		return "Failed to save updated ice cream stock: " + error;
	}

	return "";
}

async function addToInventory(flavor, scoops) {
	let item;
	try {
		item = await IceCreamModel.findOne({ flavor });
	} catch (error) {
		return "Failed to get ice cream from database: " + error;
	}

	if (!item) {
		return await insertNewIceCreamFlavor(flavor, scoops);
	}

	item.scoops += scoops;
	try {
		await item.save();
	} catch (error) {
		return "Failed to save updated ice cream stock: " + error;
	}

	return "";
}

async function insertNewIceCreamFlavor(flavor, scoops) {
	try {
		await IceCreamModel.create({
			flavor,
			scoops,
		});
	} catch (error) {
		return "Failed to insert new ice cream flavor";
	}
	return "";
}

export { getStock, buyIceCream, addToInventory };
