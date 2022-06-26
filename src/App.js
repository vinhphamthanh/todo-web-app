import {
	Container,
	CssBaseline
} from '@mui/material';
import { styled } from '@mui/material/styles';
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
			      todosSelect,
			      todoActions,
		      }
	      } = AppSlices;
	const { todos } = useSelector(todosSelect);

	const [todo, setToDo] = useState(initialToDo);
	const [isToDoValid, setIsToDoValid] = useState(false);

	useEffect(() => {
		dispatch(todoActions.fetchToDos());
	}, [dispatch, todoActions]);

	const handleInputToDo = evt => {
		const { target: { value } } = evt;
		const data = {
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
		dispatch(todoActions.addToDo(todo));
	};

	const handleCompleteToDo = (id, checked) => {
		const updateTodo = todos.find(item => item.id === id);

		dispatch(todoActions.updateToDo({
			...updateTodo,
			completed: checked,
		}));
	};

	const handleDeleteToDo = id => {
		dispatch(todoActions.deleteToDo(id))
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
