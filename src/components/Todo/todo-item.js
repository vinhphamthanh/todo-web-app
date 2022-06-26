import { DeleteOutline } from '@mui/icons-material';
import {
	Checkbox,
	Container,
	FormControlLabel,
	IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { memo } from 'react';

const Div = styled(Container)(({ theme }) => (
	{
		display: 'grid',
		gridTemplateColumns: '1fr auto',
		gap: theme.spacing(1),
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		maxWidth: 'inherit',
		margin: `${theme.spacing(0)} auto`
	}
));

const ToDoItem = ({
	item,
	theme,
	onComplete,
	onDelete
}) => {
	const {
		      id,
		      title,
		      completed
	      } = item;

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
						checked={completed}
						onChange={handleChange}
						color="info"
					/>
				}
				label={title}
				sx={{
					textDecoration: completed ?
						`${theme.palette.error.dark} line-through` :
						'',
					textTransform: 'capitalize',
				}}
			/>
			<IconButton color="error" onClick={handleDelete}>
				<DeleteOutline/>
			</IconButton>
		</Div>
	);
};

export default memo(ToDoItem);
