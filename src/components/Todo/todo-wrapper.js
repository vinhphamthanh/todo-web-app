import {
	useCallback,
	useEffect,
	useState
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import AppSlices from '../../store/reducers/index';
import ToDoAdding from './todo-input';
import ToDoList from './todo-list';

const initialToDo = {
	title: '',
};

export const ToDoWrapper = () => {
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

	const handleInputToDo = useCallback(evt => {
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
	}, []);

	const handleSubmitToDo = useCallback(evt => {
		evt.preventDefault();

		setToDo(initialToDo);
		setIsToDoValid(false);
		dispatch(todoActions.addToDo(todo));
	}, [todo, dispatch, todoActions]);

	const handleCompleteToDo = useCallback((id, checked) => {
		const updateTodo = todos.find(item => item.id === id);

		dispatch(todoActions.updateToDo({
			...updateTodo,
			completed: checked,
		}));
	}, [dispatch, todoActions, todos]);

	const handleDeleteToDo = useCallback(id => {
		dispatch(todoActions.deleteToDo(id));
	}, [dispatch, todoActions]);

	return (
		<>
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
		</>
	);
};
