"use client"
import React, {FC} from 'react';
import FactoryItem from "@/components/FactoryItem/FactoryItem";
import {AddInput} from "@/components/Input/Input";
import {getAllFactory, IFactoryBody} from "@/axios";
import cs from '@/app/page.module.css';

const Factories: FC = () => {
	const [data, setData] = React.useState<IFactoryBody[]>([]);
	React.useEffect(() => {
		const fetchData = async () => {
			setData(await getAllFactory());
		};
		fetchData();
	}, [])
	return (
		<div className={cs.main}>
			<h1 className={cs.title}>Заводы</h1>
			<AddInput/>
			{data && data.map((data: IFactoryBody, i) => (
				<FactoryItem {...data} key={i}/>
			))}
		</div>
	);
};

export default Factories;