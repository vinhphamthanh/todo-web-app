import {
	Container,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../../assets/AwayLogo.svg';

const Div = styled(Container)(({ theme }) => (
	{
		bottom: theme.spacing(0),
		padding: theme.spacing(3, 0),
		borderTopWidth: 2,
		borderTopColor: theme.palette.primary.dark,
		borderTopStyle: 'solid',
		display: 'grid',
		gridTemplateColumns: '1fr',
		justifyItems: 'center',
		[theme.breakpoints.up('sm')]: {
			borderTopRightRadius: 8,
			borderTopLeftRadius: 8,
			gridTemplateColumns: 'auto 1fr',
		}
	}
));

const Address = styled(Container)(({ theme }) => (
	{
		display: 'grid',
		gridTemplate: '1fr 1fr / 1fr',
		alignItems: 'end',
		padding: theme.spacing(2, 2, 0),
	}
));

const Office = styled(Typography)(({ theme }) => (
	{
		fontSize: theme.typography.caption.fontSize,
		textAlign: 'left',
		color: theme.palette.primary.dark,
	}
));

export const Footer = () => {
	return (
		<Div>
			<img src={Logo} alt="Away Digital Teams"/>
			<Address>
				<Office>Australia: Suite 4 & 5, 15 Inkerman St, St Kilda VIC 3182</Office>
				<Office>Vietnam: IPC Tower, Fl 15, 1489 Nguyen Van Linh, Dist.7 HCMC</Office>
			</Address>
		</Div>
	);
};
