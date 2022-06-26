import {
	Box,
	Modal,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
	useCallback,
	useEffect
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import AppSlices from '../../store/reducers/index';

const BoxContent = styled(Box)(({ theme }) => (
	{
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: 374,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.error.light,
		borderRadius: 4,
		boxShadow: 24,
		padding: theme.spacing(4, 2),
	}
));

export const ErrorModal = () => {
	const {
		      ExtraSlice: {
			      extraSelect,
			      setError
		      }
	      } = AppSlices;
	const { error } = useSelector(extraSelect);
	const dispatch = useDispatch();

	const handleClose = useCallback(() => {
		dispatch(setError(null));
	}, [dispatch, setError]);

	useEffect(() => {
		handleClose();
	}, [handleClose]);

	return (
		!!error ?
			(
				<Modal
					open={!!error}
					onClose={handleClose}
				>
					<BoxContent>
						<Typography variant="h6" component="h2" color="error">
							Error Occurs
						</Typography>
						<Typography id="modal-description" variant="body2" sx={{ mt: 2 }}>
							{error}
						</Typography>
					</BoxContent>
				</Modal>
			) :
			null
	);
};
