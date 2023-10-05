import * as mongoose from "mongoose";

export const connectMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://flexxu:aWiUwFQ8eMbSWM61@cluster0.gvckipc.mongodb.net/?retryWrites=true&w=majority");
		console.log("Connected to MongoDB.");
	} catch (error) {
		console.error(error);
	}
}
