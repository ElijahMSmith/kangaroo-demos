import mongoose from "mongoose";

const iceCreamSchema = new mongoose.Schema({
	flavor: { type: String, required: true },
	scoops: { type: Number, min: 0 },
	description: String,
});

export default mongoose.model("IceCream", iceCreamSchema);
