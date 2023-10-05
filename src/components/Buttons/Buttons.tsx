import React, {ButtonHTMLAttributes, FC} from 'react';
import cs from '@/components/Buttons/Buttons.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	types: string,
}

const Buttons: FC<Props> = ({types, children, ...props}: Props) => {
	return (
		<button className={types === 'gray' ? cs.btn_gray : cs.btn_lime} {...props}>
			{children}
		</button>
	);
};

export default Buttons;