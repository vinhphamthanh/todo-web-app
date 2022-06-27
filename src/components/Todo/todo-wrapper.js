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
		      todoActions: {
						getToDos_start,
			      addToDo_start,
			      updateToDo_start,
			      deleteToDo_start,
		      },
	      } = todoReducer;

	const [todo, setToDo] = useState(initialToDo);
	const [isToDoValid, setIsToDoValid] = useState(false);

	useEffect(() => {
		dispatch(getToDos_start([TODO_URL]));
	}, [dispatch, getToDos_start]);

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
		dispatch(addToDo_start(data));
	}, [todo, dispatch, addToDo_start]);

	const handleCompleteToDo = useCallback((id, checked) => {
		const updateTodo = todos.find(item => item.id === id);

		const data = [
			`${TODO_URL}/${id}`, {
				...updateTodo,
				completed: checked,
			}
		];
		dispatch(updateToDo_start(data));
	}, [dispatch, updateToDo_start, todos]);

	const handleDeleteToDo = useCallback(id => {
		dispatch(deleteToDo_start([`${TODO_URL}/${id}`]));
	}, [dispatch, deleteToDo_start]);

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
