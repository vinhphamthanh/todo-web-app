import { ChangeCircle } from '@mui/icons-material';
import { Paper, } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { extraSelect } from '../../store/reducers/extra.reducer';

const Overlay = styled(Paper)(() => (
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(3, 169, 244, 0.3)',
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		width: '100%',
		height: '100%',
	}
));

export const Loading = () => {
	const { loading } = useSelector(extraSelect);

	return (
		loading ?
			(
				<Overlay>
					<ChangeCircle fontSize="large" sx={{
						animation: "spin 1s linear infinite",
						"@keyframes spin": {
							"0%": {
								transform: "rotate(360deg)",
							},
							"100%": {
								transform: "rotate(0deg)",
							},
						},
						fontSize: 45,
					}} color="primary"/>
				</Overlay>
			) :
			null
	);
};
