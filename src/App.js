import {
	Container,
	CssBaseline
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { nanoid } from '@reduxjs/toolkit';
import {
	useEffect,
	useState
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { AppBar } from './components/app-bar';
import { ToDoAdding } from './components/todo/todo-adding';
import { ToDoList } from './components/todo/todo-list';
import AppSlices from './store/reducers';
import {
	sortByCompleted,
	sortByDate
} from './utils/sorting';

const AppLayout = styled(Container)(({ theme }) => (
	{
		...theme.typography.body2,
		display: 'flex',
		padding: theme.spacing(9, 2),
		color: theme.palette.text.secondary,
		textAlign: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: '100vh',
	}
));

const initialToDo = {
	title: '',
};

function App() {
	const dispatch = useDispatch();
	const {
		      ToDoSlice: {
			      addToDo,
			      updateToDos,
			      todosSelect,
			      todoActions,
		      }
	      } = AppSlices;
	const { todos } = useSelector(todosSelect);

	const [todo, setToDo] = useState(initialToDo);
	const [isToDoValid, setIsToDoValid] = useState(false);

	useEffect(() => {
		dispatch(todoActions.fetchToDos);
	}, []);

	const handleInputToDo = evt => {
		const { target: { value } } = evt;
		const data = {
			id: nanoid(),
			createdAt: new Date().getTime(),
			title: value,
			completed: false,
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

		setToDo(initialToDo);
		setIsToDoValid(false);
		dispatch(addToDo(todo));
	};

	const handleCompleteToDo = (id, checked) => {
		const mutatedList = todos.map(item => {
			if (item.id === id) {
				return {
					...item,
					completed: checked,
				};
			}

			return item;
		});

		const sortByDateList = mutatedList.sort(sortByDate);
		const sortByCompletedList = sortByDateList.sort(sortByCompleted);

		dispatch(updateToDos(sortByCompletedList));
	};

	const handleDeleteToDo = id => {
		const mutatedToDo = todos.filter(item => item.id !== id);
		dispatch(updateToDos(mutatedToDo));
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
					todos={todos}
					onComplete={handleCompleteToDo}
					onDelete={handleDeleteToDo}
				/>
			</AppLayout>
		</>
	);
}

export default App;
