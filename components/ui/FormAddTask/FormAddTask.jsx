export default function FormAddTask(props) {
	return (
		<>
			<div className='font-bold text-lg border-b p-2'>
				<p>Create new Task</p>
			</div>
			<form onSubmit={props.submit}>
				<p className='p-2 font-bold'>Description</p>
				<input
					className='ml-2 border border-gray-400 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600'
					required
					type='text'
					value={props.myValue}
					onChange={props.changedForm}
				/>
				<button
					className='ml-2 border bg-blue-700 text-white rounded p-1'
					type='submit'
				>
					Create
				</button>
				<button
					onClick={props.cancel}
					className='ml-2 border bg-blue-700 text-white rounded p-1 bg-red-600'
				>
					Cancel
				</button>
			</form>
		</>
	);
}
