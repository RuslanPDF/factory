import React, {FC} from 'react';
import Buttons from "@/components/Buttons/Buttons";
import Link from "next/link";
import {deleteFactoryById} from "@/axios";
import cs from "@/components/FactoryItem/FactoryItem.module.css";

interface IFactoryItemProps {
	name: string,
	ip: string,
	index: string,
	_id: string,
}

const FactoryItem: FC<IFactoryItemProps> = ({name, index, _id, ip}: IFactoryItemProps): React.ReactNode => {
	async function onDelete(_id: string) {
		await deleteFactoryById(_id)
			.finally(() => {
				window.location.reload();
			});
	}
	return (
		<div className={cs.container_input}>
			<p className={cs.text}>{name}</p>
			<p className={cs.text}>{index}</p>
			<p className={cs.text}>{ip}</p>
			<div className={cs.btn_container}>
				<Buttons types={'lime'}>
					<Link className={cs.link} href={`/settings/${_id}`}>Изменить</Link>
				</Buttons>
				<Buttons onClick={() => onDelete(_id)} types={'gray'}>Удалить</Buttons>
			</div>
		</div>
	);
};

export default FactoryItem;