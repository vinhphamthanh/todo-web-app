import { DeleteOutline } from '@mui/icons-material';
import { Checkbox, Container, FormControlLabel, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const Div = styled(Container)(({ theme }) => ( {
	display: 'grid',
	gridTemplateColumns: '1fr auto',
	gap: theme.spacing(1),
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	maxWidth: 'inherit',
	margin: `${theme.spacing(0)} auto`
} ));

export const ToDoItem = ({ item, theme, onComplete, onDelete }) => {
	const { id, title, completed } = item;

	const handleChange = evt => {
		const { target: { checked } } = evt;
		onComplete(id, checked);
	};

	const handleDelete = () => {
		onDelete(id);
	};

	return (
		<Div disableGutters>
			<FormControlLabel
				control={
					<Checkbox
						disableRipple
						onChange={handleChange}
					/>
				}
				label={title}
				sx={{
					textDecoration: completed ? `${theme.palette.primary.light} line-through` : '',
					textTransform: 'capitalize',
				}}
			/>
			<IconButton color="error" onClick={handleDelete}>
				<DeleteOutline/>
			</IconButton>
		</Div>
	);
};
