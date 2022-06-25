import {
	Container,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import AppSlices from '../store/reducers';

const Overlay = styled(Container)(() => (
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	}
));

export const Loading = () => {
	const { ExtraSlice: { extraSelect } } = AppSlices;
	const { loading } = useSelector(extraSelect);
	console.log('')
	console.log('[LOGGING----------------------LOGGING]')
	console.log('[LOGGING]:::x:::Loading:::loading --> ', loading)
	return (
		loading ?
			(
				<Overlay>
					<Typography variant="h6" color="#fff">Loading ...</Typography>
				</Overlay>
			) :
			null
	);
};
