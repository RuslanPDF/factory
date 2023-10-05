import React from 'react';
import cs from './loading.module.css'

const Loading = () => {
	return (
		<div className={cs.loading_container}>
			<div className={cs.lds_roller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;