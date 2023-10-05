import React, {FC} from 'react';
import {AddInput, IPInput} from "../Input/Input";
import cs from './form.module.css';

const Form: FC = (): JSX.Element => {
	return (
		<>
			<div>
				<label className={cs.labels} htmlFor={'index'}>Индекс</label>
				<AddInput name={'index'} id={'index'} stateSVG={false} style={{padding: '5px 10px',}}/>
			</div>
			<div>
				<label className={cs.labels} htmlFor="name">Наименование</label>
				<AddInput name={'name'} id={'name'} stateSVG={false} style={{padding: '5px 10px',}}/>
			</div>
			<div>
				<label className={cs.labels} htmlFor="host">Хост</label>
				<IPInput name={'ip'} id={'host'}/>
			</div>
		</>
	);
};

export default Form;