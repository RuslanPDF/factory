import mongoose from 'mongoose';

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

export interface IFactorySchema {
	name: string,
	ip: string,
	index: string,
}

const FactorySchema = new Schema<IFactorySchema>({
	name: {type: String, required: true},
	ip: {type: String, required: true},
	index: {type: String, required: true},
});

export const Factory = mongoose.models.Factory || mongoose.model('Factory', FactorySchema);