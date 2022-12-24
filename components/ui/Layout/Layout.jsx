import React, { Fragment, useState } from 'react';
import Task from '../Task/Task';
import FormAddList from '../FormAddList/FormAddList';
import FormAddTask from '../FormAddTask/FormAddTask';
import AddList from '../AddList/AddList';
import Nav from '../Nav/Nav';
import Title from '../Title/Title';
import List from '../List/List';

export default function TodoList() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			name: 'Books',
			tasks: [
				{
					id: 1,
					description: 'Read the Timée',
					completed: false,
				},
				{
					id: 2,
					description: 'Read the Critias',
					completed: false,
				},
			],
		},
		{
			id: 2,
			name: 'Sport',
			tasks: [
				{
					id: 1,
					description: 'Go to the gym',
					completed: false,
				},
				{
					id: 2,
					description: 'Go running',
					completed: false,
				},
			],
		},
	]);

	const [inputList, setInputList] = useState('');
	const [inputTask, setInputTask] = useState('');
	const [activeList, setActiveList] = useState(tasks[0]);
	const [showAddTask, setHideTask] = useState(true);
	const [showAddList, setHideList] = useState(true);

	const changeList = (task) => {
		setActiveList(task);
	};

	const showHideTaskClickedHandler = () => {
		setHideTask(!showAddTask);
		setInputTask('');
	};

	const showHideListClickedHandler = () => {
		setHideList(!showAddList);
		setInputList('');
	};

	const removeClickedHandler = (index) => {
		const newTasks = tasks.map((task) => {
			if (task.id === activeList.id) {
				const newTasks = [...task.tasks];
				newTasks.splice(index, 1);
				return { ...task, tasks: newTasks };
			}
			return task;
		});
		setTasks(newTasks);
		setActiveList({
			...activeList,
			tasks: newTasks[activeList.id - 1].tasks,
		});
	};
	const doneClickedhandler = (index) => {
		const newTask = [...tasks];
		newTask[index].done = !tasks[index].done;
		setTasks(newTask);
	};

	const changedFormListHandler = (event) => {
		setInputList(event.target.value);
	};

	const changedFormTaskHandler = (event) => {
		setInputTask(event.target.value);
	};

	const submittedListHandler = (event) => {
		event.preventDefault();

		const newTask = {
			id: tasks.length + 1,
			name: inputList,
			tasks: [],
		};
		setTasks([...tasks, newTask]);
		showHideListClickedHandler();
	};

	const submittedTaskHandler = (event) => {
		event.preventDefault();
		const newTask = {
			id: activeList.tasks.length + 1,
			description: inputTask,
			completed: false,
		};
		const newTasks = tasks.map((task) => {
			if (task.id === activeList.id) {
				return { ...task, tasks: [...task.tasks, newTask] };
			}
			return task;
		});
		setTasks(newTasks);
		setActiveList({
			...activeList,
			tasks: newTasks[activeList.id - 1].tasks,
		});
		showHideTaskClickedHandler();
	};

	const display = showAddTask ? (
		<FormAddList
			content='Add onglet'
			myvalue={inputList}
			changedForm={changedFormListHandler}
			submit={submittedListHandler}
			cancel={showHideListClickedHandler}
		/>
	) : (
		<FormAddTask
			content='Add task'
			myvalue={inputTask}
			changedForm={changedFormTaskHandler}
			submit={submittedTaskHandler}
			cancel={showHideTaskClickedHandler}
		/>
	);

	return (
		<Fragment>
			{showAddTask && showAddList ? (
				<Fragment>
					<Title content='Todo List' />
					<div className='flex flex-row items-start justify-items-start border-b'>
						{tasks.map((task) => (
							<List
								key={task.id}
								clic={() => changeList(task)}
								content={task.name}
							/>
						))}
						<AddList
							displayAddList={() => showHideListClickedHandler()}
						/>
					</div>
					<Nav displayAddTask={() => showHideTaskClickedHandler()} />
					{activeList.tasks.map((task, index) => (
						<Task
							key={task.id}
							content={task.description}
							done={task.completed}
							removeTask={() => removeClickedHandler(index)}
							doneClicked={() => doneClickedhandler(index)}
						/>
					))}
				</Fragment>
			) : (
				display
			)}
		</Fragment>
	);
}
