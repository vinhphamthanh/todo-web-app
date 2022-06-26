import {
	Button,
	Container,
	TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo } from 'react';

const Div = styled(Container)(({ theme }) => (
	{
		margin: theme.spacing(3, 0, 1),
		display: 'grid',
		gridTemplate: '1fr auto / 1fr',
		width: '100%',
		gap: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			width: 450,
		}
	}
));

const TodoInput = ({
	todo,
	isValid,
	onChange,
	onSubmit
}) => {

	return (
		<Div disableGutters>
			<TextField
				id="todo-id"
				label="ToDo Task"
				placeholder="What needs to be done?"
				name="todo-id"
				onChange={onChange}
				value={todo.title}
				inputProps={{
					maxLength: 60,
				}}
			/>
			<Button
				variant="contained"
				disabled={!isValid}
				type="submit"
				onClick={onSubmit}
			>
				Add
			</Button>
		</Div>
	);
};

export default memo(TodoInput);
