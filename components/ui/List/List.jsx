import React from 'react';

export default function List(props) {
	return (
		<button
			className='first:border-l border-r border-t rounded-t-lg px-8 active:bg-slate-50 font-medium'
			//task.id === activeTab.id ? 'active' : ''
			onClick={props.clic}
		>
			<p className='p-2'>{props.content}</p>
		</button>
	);
}
