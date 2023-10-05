import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {NextResponse} from "next/server";
import {Factory, IFactorySchema} from "../../../../model";
import {connectMongoDB} from "../../../../lib/mongoDB";

export interface IFactoryGetSchema extends IFactorySchema {
	_id: string;
	__v: number;
}

export async function GET(req: Request) {
	try {
		await connectMongoDB();
		const data: IFactoryGetSchema[] = await Factory.find();
		return NextResponse.json(data);
	} catch (e) {
		console.error(e);
	}
}

export async function POST(req: Request) {
	const {index, ip, name}: IFactorySchema = await req.json();
	if (!ip || !index || !name) {
		return NextResponse.json(
			{'message': "ошибка не передали один из аргуентов"},
			{status: 400}
		)
	}
	try {
		await connectMongoDB();
		const data = await Factory.create({index, ip, name});
		data.save();
		return NextResponse.json(data);
	} catch (e) {
		console.error(e);
	}
}