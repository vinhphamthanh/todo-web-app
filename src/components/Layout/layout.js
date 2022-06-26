import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ErrorModal } from '../Common/errorModal';
import { Loading } from '../Common/loading';
import { AppBar } from './app-bar';
import { Footer } from './footer';

const AppLayout = styled(Paper)(({ theme }) => (
	{
		...theme.typography.body2,
		display: 'flex',
		padding: theme.spacing(9, 0, 0),
		color: theme.palette.text.secondary,
		textAlign: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: '100vh',
	}
));

const Content = styled(Paper)(() => (
	{
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
	}
));

export const Layout = ({ children }) => (
	<AppLayout>
		<AppBar/>
		<Content elevation={0}>
			{children}
		</Content>
		<Footer/>
		<Loading/>
		<ErrorModal/>
	</AppLayout>
);
