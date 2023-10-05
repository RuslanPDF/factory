import {NextResponse} from "next/server";
import {Factory, IFactorySchema} from "../../../../../model";
import {connectMongoDB} from "../../../../../lib/mongoDB";

export async function DELETE(req: Request, {params}: { params: { id: string } }) {
	const id: string = params.id;
	try {
		await connectMongoDB();
		const data = await Factory.findByIdAndDelete(id);
		return NextResponse.json(data);
	} catch (e) {
		console.error(e);
	}
}

export async function PUT(req: Request, {params}: { params: { id: string } }) {
	const id: string = params.id;
	const {index, ip, name}: IFactorySchema = await req.json();
	if (!ip || !index || !name) {
		return NextResponse.json(
			{'message': "ошибка не передали один из аргуентов"},
			{status: 400}
		)
	}
	try {
		await connectMongoDB();
		const data = await Factory.findByIdAndUpdate(id, {index, ip, name});
		return NextResponse.json(data);
	} catch (e) {
		console.error(e);
	}
}