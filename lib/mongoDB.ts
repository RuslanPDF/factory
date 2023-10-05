import * as mongoose from "mongoose";

export const connectMongoDB = async () => {
	try {
		const url = process.env.MONGODB_URI || '';
		await mongoose.connect(url);
		console.log("Connected to MongoDB.");
	} catch (error) {
		console.error(error);
	}
}