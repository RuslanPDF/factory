'use client';
import React, {FC} from 'react';
import cs from '@/app/settings/[id]/settings.module.css';
import Form from "@/components/Form/Form";
import Buttons from "@/components/Buttons/Buttons";
import {updateFactoryById} from "@/axios";
import {useRouter} from "next/navigation";

interface Props {
	params: {
		id: string
	}
}

const FactoriesSettings: FC<Props> = ({params: {id}}: Props): JSX.Element => {
	const router = useRouter()

	function exitSettings(){
		return router.push('/');
	}

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const inputNameElement = ((e.target as HTMLFormElement).elements.namedItem("name") as HTMLInputElement).value;
		const inputIndexElement = ((e.target as HTMLFormElement).elements.namedItem("index") as HTMLInputElement).value;
		const inputIpElements = (e.target as HTMLFormElement).querySelectorAll('input[name="ip"]') as NodeListOf<HTMLInputElement>;

		let ipValue: string = '';
		inputIpElements.forEach(({value}: HTMLInputElement) => {
			ipValue += `${value}.`;
		})
		ipValue = ipValue.slice(0, ipValue.length - 1);

		await updateFactoryById(id, {
			name: inputNameElement,
			index: inputIndexElement,
			ip: ipValue
		}).then(() => {
			exitSettings();
		})
	}

	return (
		<div className={cs.settings}>
			<h1 className={cs.settings_title}>Редактировать завод</h1>
			<form onSubmit={onSubmit} className={cs.settings_container}>
				<div className={cs.form}>
					<div className={cs.form_container}>
						<Form/>
					</div>
				</div>
				<div className={cs.btn_container}>
					<Buttons onClick={exitSettings} type={'button'} types={'gray'}>Отмена</Buttons>
					<Buttons type={'submit'} types={'lime'}>Сохранить</Buttons>
				</div>
			</form>
		</div>
	);
};

export default FactoriesSettings;