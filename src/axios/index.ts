import axios, {AxiosResponse} from "axios";

export interface IFactoryBodyUpdate {
	name: string,
	ip: string,
	index: string,
}

export interface IFactoryBody extends IFactoryBodyUpdate {
	_id: string,
	__v: number
}

const url: string = `${process.env.BACKEND_URL}`

export const getFactoryById = async (id: number): Promise<IFactoryBody> => {
	const {data}: AxiosResponse = await axios.get(`${url}/${id}`);
	return data;
};

export const getAllFactory = async (): Promise<IFactoryBody[]> => {
	const {data}: AxiosResponse = await axios.get(`${url}/`);
	return data;
};

export const postFactory = async (body: IFactoryBodyUpdate): Promise<IFactoryBody[]> => {
	const {data}: AxiosResponse = await axios.post(`${url}/`, body);
	return data;
};

export const deleteFactoryById = async (id: string): Promise<IFactoryBody> => {
	const {data}: AxiosResponse = await axios.delete(`${url}/${id}`);
	return data;
};

export const updateFactoryById = async (id: string, body: IFactoryBodyUpdate): Promise<IFactoryBody> => {
	const {data}: AxiosResponse = await axios.put(`${url}/${id}`, body);
	return data;
};