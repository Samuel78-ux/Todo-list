import React from 'react';

export default function button(props) {
	return (
		<button
			className='first:border-l border-r border-t rounded-t-lg'
			//task.id === activeTab.id ? 'active' : ''
			onClick={props.clic}
		>
			{props.content}
		</button>
	);
}
