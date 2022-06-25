import { AppRegistrationOutlined } from '@mui/icons-material';
import {
	AppBar as MuiAppBar,
	Container,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Div = styled(Container)(({ theme }) => (
	{
		display: 'grid',
		padding: theme.spacing(2),
		gridTemplateColumns: 'auto 1fr',
		alignItems: 'center',
		gap: theme.spacing(2),
	}
));

export const AppBar = () => {
	return (
		<MuiAppBar>
			<Div>
				<AppRegistrationOutlined/>
				<Typography variant="h5" align="left">TODO</Typography>
			</Div>
		</MuiAppBar>
	);
};
