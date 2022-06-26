import {
	Paper,
	Typography,
	useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import ToDoItem from './todo-item';

const Div = styled(Paper)(({ theme }) => (
	{
		margin: `${theme.spacing(3)} auto`,
		width: '100%',
		display: 'grid',
		gap: theme.spacing(1),
		padding: theme.spacing(3, 2),
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.primary.light,
		borderRadius: theme.spacing(1),
		[theme.breakpoints.up('sm')]: {
			width: 450,
		}
	}
));

const ToDoList = ({
	todos,
	onComplete,
	onDelete
}) => {
	const theme = useTheme();

	return (
		<Div elevation={1}>
			<Typography variant="h5" color="primary">TODO List</Typography>
			{todos.length > 0 ?
				todos.map(item => (
					<ToDoItem
						key={item.id}
						item={item}
						theme={theme}
						onComplete={onComplete}
						onDelete={onDelete}
					/>
				)) :
				(
					<Typography variant="caption" color="error">
						You do not have any item to do.
					</Typography>
				)}
		</Div>
	);
};

export default memo(ToDoList);
