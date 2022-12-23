import React from 'react';

export default function Title(props) {
	return (
		<div className='p-4 text-2xl font-bold'>
			<p>{props.content}</p>
		</div>
	);
}
