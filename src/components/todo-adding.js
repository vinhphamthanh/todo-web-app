import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Div = styled(Container)(({ theme }) => ( {
	margin: theme.spacing(3, 0, 1),
	display: 'grid',
	gridTemplate: '1fr auto / 1fr',
	maxWidth: 374,
	width: '100%',
	gap: theme.spacing(2),
} ));


export const ToDoAdding = ({ todo, isValid, onChange, onSubmit }) => {

	return (
		<Div disableGutters>
			<TextField
				autoFocus
				id="todo-id"
				label="ToDo Task"
				placeholder="Enter to do task..."
				name="todo-id"
				onChange={onChange}
				value={todo.title}
				inputProps={{
					maxLength: 60,
				}}
				// error={isToDoDuplicated}
				// helperText={isToDoDuplicated ? 'Entry is duplicated' : ''}
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
