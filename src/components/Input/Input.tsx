import React, {FC, InputHTMLAttributes} from 'react';
import PlusSvg from "../../../public/svg/PlusSVG";
import cs from '@/components/Input/input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const IPInput: FC<InputProps> = ({...props}: InputProps) => {
	return (
		<div className={cs.ipInput}>
			<input placeholder={'IP'} {...props} type="text" maxLength={3}/>
			.
			<input {...props} type="text" maxLength={3} minLength={1}/>
			.
			<input {...props} type="text" maxLength={3}/>
			.
			<input {...props} type="text" maxLength={3}/>
		</div>
	);
};

interface IAddInput extends InputProps {
	stateSVG?: boolean
}

const AddInput: FC<IAddInput> = ({stateSVG = true, ...props}: IAddInput) => {
	return (
		<div className={cs.addInput}>
			<input {...props} type="text"/>
			{stateSVG && <PlusSvg className={cs.icon_plus}/>}
		</div>
	);
};

export {IPInput, AddInput};