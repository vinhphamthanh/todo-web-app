import { Container, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { AppBar } from './components/app-bar';
import { ToDoAdding } from './components/todo-adding';
import { ToDoList } from './components/todo-list';
import { sortByCompleted, sortByDate } from './utils/sorting';

const AppLayout = styled(Container)(({ theme }) => ( {
	...theme.typography.body2,
	display: 'flex',
	padding: theme.spacing(9, 2),
	color: theme.palette.text.secondary,
	textAlign: 'center',
	flexDirection: 'column',
	alignItems: 'center',
	minHeight: '100vh',
} ));

function App() {
	const [todo, setToDo] = useState({ title: '' });
	const [todoList, setToDoList] = useState([]);
	const [isToDoValid, setIsToDoValid] = useState(false);

	const handleInputToDo = evt => {
		const { target: { value } } = evt;
		const data = {
			id: nanoid(), createdAt: new Date(), title: value, completed: false,
		};
		setToDo(data);

		if (/[\w\s]{5,}/.test(value)) {
			setIsToDoValid(true);
		} else {
			setIsToDoValid(false);
		}
	};

	const handleSubmitToDo = evt => {
		evt.preventDefault();

		setToDoList(oldList => [todo, ...oldList]);
		setToDo({ title: '' });
		setIsToDoValid(false);
	};

	const handleCompleteToDo = (id, checked) => {
		const mutatedList = todoList.map(item => {
			if (item.id === id) {
				item.completed = checked;
			}

			return item;
		});

		const sortByDateList = mutatedList.sort(sortByDate);
		const sortedList = sortByDateList.sort(sortByCompleted);

		setToDoList(() => [...sortedList]);
	};

	const handleDeleteToDo = id => {
		const mutatedToDo = todoList.filter(item => item.id !== id);
		setToDoList(() => [...mutatedToDo]);
	};

	return (
		<>
			<CssBaseline/>
			<AppLayout>
				<AppBar/>
				<ToDoAdding
					todo={todo}
					isValid={isToDoValid}
					onChange={handleInputToDo}
					onSubmit={handleSubmitToDo}
				/>
				<ToDoList
					todos={todoList}
					onComplete={handleCompleteToDo}
					onDelete={handleDeleteToDo}
				/>
			</AppLayout>
		</> );
}

export default App;
