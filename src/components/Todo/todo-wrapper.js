import {
	useCallback,
	useEffect,
	useState
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { TODO_URL } from '../../constants/endpoints';
import todoReducer, { todosSelect } from '../../store/reducers/todo.reducer';
import ToDoAdding from './todo-input';
import ToDoList from './todo-list';

const initialToDo = {
	title: '',
};

export const ToDoWrapper = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector(todosSelect);
	const {
		      getToDosStart,
		      addToDoStart,
		      updateToDoStart,
		      deleteToDoStart
	      } = todoReducer;

	const [todo, setToDo] = useState(initialToDo);
	const [isToDoValid, setIsToDoValid] = useState(false);

	useEffect(() => {
		dispatch(getToDosStart([TODO_URL]));
	}, [dispatch, getToDosStart]);

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
		const data = [TODO_URL, todo];
		dispatch(addToDoStart(data));
	}, [todo, dispatch, addToDoStart]);

	const handleCompleteToDo = useCallback((id, checked) => {
		const updateTodo = todos.find(item => item.id === id);

		const data = [
			`${TODO_URL}/${id}`, {
				...updateTodo,
				completed: checked,
			}
		];
		dispatch(updateToDoStart(data));
	}, [dispatch, updateToDoStart, todos]);

	const handleDeleteToDo = useCallback(id => {
		dispatch(deleteToDoStart([`${TODO_URL}/${id}`]));
	}, [dispatch, deleteToDoStart]);

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
